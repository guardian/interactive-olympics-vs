import {sync} from '../variables';
import {scaleLinear as d3_scaleLinear} from 'd3-scale';

export default function (domain) {
    let min, max;
    let scale = { domain: {} };
    let isRange = (dd) => dd[0] !== dd[1];
    
    if (domain.x) {
        scale.domain.x = domain.x;
        scale.domainShiftX = isRange(domain.x) ? (domain.x[1] - domain.x[0])/20 : 1;
        min = Math.round((domain.x[0] - scale.domainShiftX)*100)/100;
        max = Math.round((domain.x[1] + scale.domainShiftX)*100)/100;
        scale.x = d3_scaleLinear().domain([min, max]).range([0, 100]);
        //console.log("x:", domain.x, min, max);
    }
    if (domain.y) {
        scale.domain.y = domain.y;
        scale.domainShiftY = isRange(domain.y) ? (domain.y[1] - domain.y[0])/20 : 1;
        min = Math.round((domain.y[0] - scale.domainShiftY)*100)/100;
        max = Math.round((domain.y[1] + scale.domainShiftY)*100)/100;
        scale.y = d3_scaleLinear().domain([min, max]).range([100, 0]);
        //console.log("y:", domain.y, min, max);
    }

    //console.log(scale); 
    sync.scale = scale;
    return scale;
}
