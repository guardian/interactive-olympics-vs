import jsonRecord from '../../data/long-jump_m.json!json';
//import jsonFinals from '../../dataDummy/long-jump_m.json!json';
import parseData from '../data/parser';
import result from './result';

import {extent as d3_extent} from 'd3-array';
import {record} from "../variables";

export default function(event, test) {
    if (test) { console.log("this is a testing page"); }
    fetchData(event, test, displayResult);
}

function displayResult (err, jsonRecord, jsonFinals, jsonStates) {
    if (err) { console.error(err); return; }

    stateHeaders.data = jsonStates.embed_vs;

    let data = parseData(jsonRecord, jsonFinals, "Distance");
    let dataCombo = data.finals.concat(data.medals, data.worlds);
    
    // TODO: move to data/parse due to calc change
    let tempOr = data.medals[data.medals.length-1];
    let tempWr = data.worlds[data.worlds.length-1];
    //record.or = tempOr
    //record.wr
    console.log("gm", data.finals[data.finals.length-1]);
    console.log("wr", tempWr);
    console.log("or", tempOr);
    
    // farest record
    let distWr = d3_extent(dataCombo, d => d.x)[1]; 
    Object.keys(data).forEach(dd => {
        // time to distance
        data[dd] = data[dd].map(dm => {
            dm.x = Math.round((dm.x - distWr)*1000)/1000;
            dm.attrs.dist = Math.abs(dm.x);
            return dm;
        });
        // sort
        data[dd].sort((d1, d2) => d1.x - d2.x);
    });
    console.log(data);

    result(data, dataCombo); 
}
