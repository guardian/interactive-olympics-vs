import jsonRecord from '../../data/breaststroke100_m.json!json';
import jsonFinals from '../../dataDummy/breaststroke100_m.json!json';
import parseData from './data';
import result from './result';

import {extent as d3_extent} from 'd3-array';

export default function() {
    let data = parseData(jsonRecord, jsonFinals);
    let dataCombo = data.finals.concat(data.medals, data.worlds);

    /* data manipulation, even specific */ 
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
    console.log(data);

    result(data, dataCombo); 
}
