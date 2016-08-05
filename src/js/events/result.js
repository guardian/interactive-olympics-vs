import {select as d3_select} from 'd3-selection';
import {extent as d3_extent} from 'd3-array';
import {toState, getNextState} from '../draw/state';
import {record} from '../variables';
import calcScale from '../draw/scale';
import Dots from '../draw/dots';
import Axis from '../draw/axis';
import utils from '../lib/utils';

export default function(data) {
    let dataCombo = data.finals.concat(data.medals, data.worlds);
    let domain = getDomain(dataCombo);

    // init, draw all
    let scale = calcScale(domain);
    let els = {};

    els.dotsF = new Dots({
        dataset: "final",
        radius: 9
    });
    els.dotsF.init(data.finals, scale);

    els.dotsM = new Dots({
        dataset: "medal",
        radius: 6
    });
    els.dotsM.init(data.medals, scale);

    els.dotsW = new Dots({
        dataset: "world",
        radius: 3,
        color: "#333",
        stroke: "rgba(255, 255, 255, 0.25)"
    });
    els.dotsW.init(data.worlds, scale);   
    
    // axis
    els.axisY = new Axis({coord: "y", value: "year"});
    els.axisY.init(dataCombo.map(d => d.y), scale); 

    els.axisX = new Axis({coord: "x", value: "mark"});
    els.axisX.init(dataCombo.map(d => d.x), scale);    
    
    // note and misc updates
    d3_select("#" + record.wr.id).attr("class", "wr"); 
    d3_select("#" + record.or.id).attr("class", "or");
    d3_select(".note").classed("d-n", record.type !== "s" ? true : false);


    // update with animations
    let state = {};
    let domainFinal = getDomain(data.finals.concat([record.wr, record.or]));
    let diff = 2016 - domainFinal.y[0];
    
    state.final = { 
        domain: {
            x: [domainFinal.x[0], 0],
            y: [2016 - diff*1.5, 2016 + diff*1.25]
        },
        opacity: [0.75, 0, 0]
    };

    let domainMedal = getDomain(data.finals.concat(data.medals));
    domainMedal.x[1] = 0;
    state.medal = { 
        domain: domainMedal, 
        opacity: [0.75, 0.5, 0]
    };    

    state.world = { 
        domain: getDomain(data.finals.concat(data.worlds)),
        opacity: [0.75, 0, 0.75]
    };    

    state.mixed = { 
        domain: domain,
        opacity: [0.75, 0.5, 0.75]
    };    

    // default 
    toState(els, state.final, "final");
    
    // next button
    document.querySelector(".btn-next").addEventListener("click", () => {
        // current
        let stateName = document.querySelector(".js-chart").getAttribute("data-state");
        // next
        let stateNameNext = getNextState(stateName).name;
        let stateDataNext = state[stateNameNext];
        
        toState(els, {domain: stateDataNext.domain, opacity: stateDataNext.opacity, duration: 2}, stateNameNext);
    });
}

function getDomain(data) {
    return {
        x: d3_extent(data, d => d.x),
        y: d3_extent(data, d => d.y)
    };
}
