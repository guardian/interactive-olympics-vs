import {extent as d3_extent} from 'd3-array';
import {stateHeaders} from '../variables';
import parseData from '../data/parser';
import fetchData from '../data/loader';
import result from './result';

export default function(event, test) {
    if (test) { console.log("this is a testing page"); }
    fetchData(event, test, displayResult);
}

function displayResult (err, jsonRecord, jsonFinals, jsonStates) {
    if (err) { console.error(err); return; }

    stateHeaders.data = jsonStates.embed_vs;

    let data = parseData(jsonRecord, jsonFinals, "Time");
    let dataCombo = data.finals.concat(data.medals, data.worlds);

    // fastest swimming time
    let timeWr = d3_extent(dataCombo, d => d.x)[0];
    Object.keys(data).forEach(dd => {
        // time to distance
        data[dd] = data[dd].map(dm => {
            dm.x = 100*timeWr/dm.x - 100;
            dm.attrs.dist = Math.round(Math.abs(dm.x)*100)/100;
            return dm;
        });
        // sort
        data[dd].sort((d1, d2) => d1.x - d2.x);
    });
    //console.log(data);

    result(data, dataCombo); 
}
