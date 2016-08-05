import array from '../lib/array';
import utils from "../lib/utils";
import {record} from "../variables";

const thisYear = 2016;

export default function(jsonRecord, jsonFinals, resultType) {
    let dataFinals = jsonFinals.olympics.eventUnit.result.entrant;
    let type = {
        team: dataFinals[0].type,
        result: dataFinals[0].property.filter(dp => dp.type === "Result Type")[0].value,
        direction: "h" // h - horizontal or v - vertical
    };
    record.type = type.result;

    // 1. format data from PA and records to .. 
    // => year, name, team, record, result
    let data = {
        worlds: parseDataRecord(jsonRecord.header, jsonRecord.world_records, type),
        medals: parseDataRecord(jsonRecord.header, jsonRecord.olympics, type),
        finals: parseDataFinals(dataFinals, type)
    };
    //console.log(data);

    // 2. remap for charts
    return {
        worlds: remapData(data.worlds, type, false),  // world records
        medals: remapData(data.medals, type, true),   // olympic medalists
        finals: remapData(data.finals, type, true)    // olympic finals of this year
    };
}


/* 1. format data */

function parseDataRecord(dataHeader, dataWorlds, type) {
    return dataWorlds.map(dr => {
        let data = {};
        dataHeader.forEach((dh, i) => data[dh] = dr[i]);
        
        data.result = data.result;
        //data.resultBlur = Math.round(getParsedValue(data.result, type.result).val*10)/10; 
        //data.id = teamType === "Team" ? data.team : utils.str2class(data.name);
        
        return data;
    });
}

function parseDataFinals(dataRaw, type) {
    return dataRaw.filter(dd => {
        // filter out disqualified
        let toClass = {}.toString;
        return dd.rank;//toClass.call(dd.property).indexOf("Array") > -1;
    }).map(dd => {
        //console.log(dd);
        let data = {};
        data.year = thisYear;
        data.name = getName(dd.participant, type.team, dd.country.name);
        data.team = dd.country.identifier;
        data.record = getProperties(dd.property, dd.rank).medal;
        data.result = dd.value;
        //data.resultBlur = Math.round(getParsedValue(dd.value, type.result).val*10)/10; 
        return data;
    });
}

function getName(participant, type, team) {
    return type === "Team" ? 
        team : //+ " ("+participant.map(dp => dp.competitor.fullName).join(", ")+")" :  //team
        participant.competitor.fullName;                            //individual
}

function getProperties(property, rank) {
    let flag = property.length;
    
    let medal;
    medal = flag ? property.filter(dp => dp.type.indexOf("Medal") > -1).map(dp => dp.value.toLowerCase()) : rank;
    medal = medal.length ? medal : rank; // team, again

    let record = flag ? property.filter(dp => dp.type.indexOf("Record") > -1).map(dt => dt.value.toLowerCase()).join(", ") : null;
    
    //console.log(property);
    //console.log(medal, record, rank, flag); 
    
    return {
        medal: medal[0],
        record: record
    };
}


/* 2. remap for chart usage  */

function remapData(data, type, isOverlappingAvoid) {
    let dataRemap;
    let dataGroup;
    
    // remap to avoid visual overlapped
    if (isOverlappingAvoid) {
        // add count and index
        dataGroup = array.groupBy(["year", "result"], data);
        dataGroup = dataGroup.map(dg => {
            dg = remapDataForCharts(dg, type);
            if (dg.length > 1) {
                let len = dg.length;
                dg.map((dd, index) => {
                    dd.count = len;
                    dd.index = index + 1;
                }); 
            }
            return dg;
        });
        dataRemap = array.merge(dataGroup); 
    } else {
        dataRemap = remapDataForCharts(data, type);
    }
    
    // sort
    switch (type.result) {
        case "Time":     
            dataRemap.sort((d1, d2) => d2.attrs.time - d1.attrs.time); 
            break;
        case "Distance": 
            dataRemap.sort((d1, d2) => d1.attrs.dist - d2.attrs.dist); 
            break;
    }

    return dataRemap; 
}

function remapDataForCharts(data, type) {
    return data.map(dd => {
        let result = getParsedValue(dd.result, type.result);
        let isJump = type.dirction === "h";
        dd.year = parseInt(dd.year);
        return {
            x: isJump ? dd.year : result.val,
            y: isJump ? result.val : dd.year,
            color: dd.record,
            attrs: {
                year: dd.year,
                name: dd.name,
                team: dd.team,
                mark: result.txt,
                time: result.val 
                // TODO: remove time if type.result is distance? 
            }
        };
    });
}

function getParsedValue(valueInTxt, type) {
    let valueInNum;
    switch (type) {
        case "Time":
            let t = valueInTxt.split(":");
            let len = t.length;
            let h = len === 3 ? parseInt(t[0])*60*60 : 0;
            let m = len !== 1 ? parseInt(t[len-2])*60 : 0;
            let s = parseFloat(t[len-1]);
            valueInNum = Math.round((h + m + s)*1000)/1000;
            break;
        case "Distance":
            valueInNum = parseFloat(valueInTxt);
            break;
    }

    return {
        txt: valueInTxt,
        val: valueInNum
    };
}
