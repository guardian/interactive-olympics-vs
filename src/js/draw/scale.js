import {scaleLinear as d3_scaleLinear} from 'd3-scale';

export default function (domain) {
    let min, max, scale = {};
    
    if (domain.x) {
        scale.domainShiftX = (domain.x[1] - domain.x[0])/20;
        min = Math.round((domain.x[0] - scale.domainShiftX)*100)/100;
        max = Math.round((domain.x[1] + scale.domainShiftX)*100)/100;
        scale.x = d3_scaleLinear().domain([min, max]).range([0, 100]);
        //console.log("x:", domain.x, min, max);
    }
    if (domain.y) {
        scale.domainShiftY = (domain.y[1] - domain.y[0])/20;
        min = Math.round((domain.y[0] - scale.domainShiftY)*100)/100;
        max = Math.round((domain.y[1] + scale.domainShiftY)*100)/100;
        scale.y = d3_scaleLinear().domain([min, max]).range([100, 0]);
        //console.log("y:", domain.y, min, max);
    }

    return scale;
}
