import {stateHeaders, record} from '../variables';
import {cfgData} from '../data/events';
import parseData from '../data/parser';
import fetchData from '../data/loader';
import result from './result';

export default function(event, test) {
    if (test) { console.log("this is a testing page"); }
    fetchData(event, test, displayResult);
}

function displayResult (err, jsonRecord, jsonFinals, jsonStates) {
    if (err) { console.log(err); return; }
        
    /* state */
    stateHeaders.data = jsonStates.embed_vs;
    
    /* chart */
    let data = parseData(jsonRecord, jsonFinals, "Time");
    let event = document.querySelector(".js-interactive").getAttribute("data-event");

    // fastest swimming time
    let best = {};
    best.medals = data.medals[data.medals.length-1];
    best.worlds = data.worlds[data.worlds.length-1];
    best.finals = data.finals[data.finals.length-1];
    console.log(data);
    
    // TODO: conti    
    let isWorld = data.worlds.length !== 0;
    let bestX = isWorld ? best.worlds.x : best.medals.x;
    let timeWr = Math.min(bestX, best.finals.x);
    let distance = cfgData[event].distance;
    Object.keys(data).forEach(dd => {
        // time to distance
        data[dd] = data[dd].map(dm => {
            dm.x = distance*timeWr / dm.x - distance;
            dm.attrs.dist = Math.round(Math.abs(dm.x)*100)/100;
            return dm;
        });
    });

    // set wr, or records and append data if needed
    setRecord("or", "medals", data, best);
    record.wr = { id: "XXX", notAvailable: true };

    result(data); 
}

function setRecord(typeRecord, typeData, data, best) {
    let isNewRecord = best.finals.x > best[typeData].x;
    switch (true) {
    case (typeRecord === "wr"):
        if (isNewRecord) {
            // clone obj, trick! 
            let newWr = (JSON.parse(JSON.stringify(best.finals)));
            newWr.color = "wr";
            data.worlds.push(newWr);
        } 
        record.wr = data.worlds[data.worlds.length-1];
        break;
    case (typeRecord === "or"): 
        record.or = isNewRecord ? best.finals : best.medals;
        break;
    }

    if (isNewRecord) {
        console.log("new " + typeRecord + "!!");
    } else if (best.finals.x === best[typeData].x) {
        console.log("almost break a new " + typeRecord + "!");
    }
}

