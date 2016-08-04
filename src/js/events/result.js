import {extent as d3_extent} from 'd3-array';
import {record} from "../variables";
import {toState, getNextState} from '../draw/state';
import calcScale from '../draw/scale';
import Dots from '../draw/dots';
import Axis from '../draw/axis';
import utils from '../lib/utils';
//import Grid from '../draw/grid';

export default function(data, dataCombo) {
    // TODO: move to data/parse due to calc change
    record.or = data.medals[data.medals.length-1];
    record.wr = data.worlds[data.worlds.length-1];

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

    els.axisY = new Axis({coord: "y", value: "year"});
    els.axisY.init(dataCombo.map(d => d.y), scale); 

    els.axisX = new Axis({coord: "x", value: "mark"});
    els.axisX.init(dataCombo.map(d => d.x), scale);    

    // update with animations
    let state = {};
    let minY = d3_extent(data.finals.concat(data.worlds[data.worlds.length-1], data.medals[data.medals.length-1]), d => d.y)[0];
    let diff = 2016 - minY;
    
    state.final = { 
        duration: 2, 
        domain: {
            x: [d3_extent(data.finals, d => d.x)[0], 0],
            y: [2016 - diff*1.5, 2016 + diff*1.25]
        },
        opacity: [0.75, 0, 0]
    };

    let domainMedal = getDomain(data.finals.concat(data.medals));
    domainMedal.x[1] = 0;
    state.medal = { 
        duration: 2,
        domain: domainMedal, 
        opacity: [0.75, 0.5, 0]
    };    

    state.world = { 
        duration: 2,
        domain: getDomain(data.finals.concat(data.worlds)),
        opacity: [0.75, 0, 0.75]
    };    

    state.mixed = { 
        duration: 2,
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
