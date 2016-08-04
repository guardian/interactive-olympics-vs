import jsonRecord from '../../data/long-jump_m.json!json';
import jsonFinals from '../../dataDummy/long-jump_m.json!json';
import parseData from '../data/parser';
import result from './result';

import {extent as d3_extent} from 'd3-array';

export default function() {
    let data = parseData(jsonRecord, jsonFinals, "Distance");
    let dataCombo = data.finals.concat(data.medals, data.worlds);
    
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
