import highjump_W from './highjump_W.json!json';
import string from '../lib/string';
import object from '../lib/object';
import array from '../lib/array';

// this year will be highlighted
const thisYear = 2012;

export default function() {
    let dataObj = arrayToObject(highjump_W);
    let dataGroup = groupDataByRecordType(dataObj);
    return dataGroup;
}

/* data: array list -> object list */
// TODO: remove name parsing
function parseNameText(name) {
    // remove country code and to lower case
    name = name.split("(")[0].toLowerCase().trim();
    // first letter upper case
    name = name.split(" ").map((str) => string.cap(str)).join(" ");
    name = name.split("-").map((str) => string.cap(str)).join("-");

    return name;
}
function parseRecordType(record, year) {
    if (record === "world")     { return "w"; } // world records
    else if (year === thisYear) { return "f"; } // olympic final (this year)
    else                        { return "o"; } // olympic medalists
}
function arrayToObject(data) {
    // data cols: 0 - year, 1 - name, 2 - team, 3 - record type, 4 - mark
    let dataObj = data.map((dd) => {
        let [year, name, team, record, mark] = dd;
        return {
            year: year,
            name: parseNameText(name),
            team: team,
            record: parseRecordType(record, year),
            result: record !== "world" ? record : null,
            mark: mark,
        };
    });

    // sort small -> large numbers
    return dataObj.sort((d1, d2) => d1.mark - d2.mark);
}

/* data: pa data -> chart data */
// case 1: x - year, y - mark ex. high jump
// case 2: x - mark, y - year ex. long jump, swim
function paToChartDataFormat(data, opt) {
    // TODO: case 1, 2 with opt
    return data.map(dd => {
        return {
            x: dd.year,
            y: dd.mark,
            c: dd.result,
            name: dd.name,
            team: dd.team,
            //record: dd.record
        };
    });
}
/* data: add count and index to avoid visual overlapped */
function paToChartData(data) {
    let dataGroup;
    dataGroup = array.groupBy(["year", "mark"], data);
    dataGroup = dataGroup.map(dg => {
        dg = paToChartDataFormat(dg);
        if (dg.length > 1) {
            let len = dg.length;
            dg.map((dd, index) => {
                dd.count = len;
                dd.index = index + 1;
            }); 
        }
        return dg;
    });

    return array.merge(dataGroup); 
}

/* group */
function groupDataByRecordType(data) {
    let dataObj = array.groupBy(["record"], data, true);
    Object.keys(dataObj).map(key => dataObj[key] = paToChartData(dataObj[key]));

    // current wr and or
    // TODO: if wr === or, ...
    let or = dataObj.o[dataObj.o.length-1];
    let wr = dataObj.w[dataObj.w.length-1];
    or.text = "or";
    wr.text = "wr";
    
    //console.log(dataObj);
    return {
        finals: dataObj.f, // olympic final results (this year)
        medals: dataObj.o, // olympic medalists
        worlds: dataObj.w, // world records
        record: [or, wr]
    };
}
