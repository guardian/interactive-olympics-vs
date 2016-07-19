import jsonRecord from '../../data/breaststroke100_m.json!json';
import jsonFinals from '../../dataDummy/breaststroke100_m.json!json';
import parseData from './data';

import {select as d3_select} from 'd3-selection';
import {extent as d3_extent} from 'd3-array';
import {range as d3_range} from 'd3-array';
import getScale from '../draw/scale';
import updateInfo from '../draw/info';
import Dots from '../draw/dots';
import Axis from '../draw/axis';

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

    let domain = getDomain(dataCombo);
    console.log(domain);

    // init, draw all
    //let elChart = d3_select(".js-chart");
    let scale = getScale(domain);
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
        stroke: "rgba(255, 255, 255, 0.5)"
    });
    els.dotsW.init(data.worlds, scale);   


    let steps = d3_range(domain.y[1], domain.y[0], -4);
    els.axisY = new Axis({coord: "y", value: "year"});
    els.axisY.init(dataCombo.map(d => d.y), scale, steps); 

    els.axisX = new Axis({coord: "x", value: "mark"});
    els.axisX.init(dataCombo.map(d => d.x), scale);    


    // update with animations
    let state = {};
    state.final = { 
        delay: 0, 
        duration: 0, 
        //domain: getDomain(data.finals.concat([data.medals[data.medals.length-1], data.worlds[data.worlds.length-1]])),
        domain: {
            x: [d3_extent(data.finals, d => d.x)[0], 0],
                y: [2015, 2017]
        },
        opacity: [0.75, 0, 0]
    };
    toState(els, state.final, "final");

    let domainMedal = getDomain(data.finals.concat(data.medals));
    domainMedal.x[1] = 0;
    state.medal = { 
        delay: 3, 
        duration: 2,
        domain: domainMedal, 
        opacity: [0.75, 0.5, 0]
    };    
    toState(els, state.medal, "medal");

    state.world = { 
        delay: 8, 
        duration: 2,
        domain: getDomain(data.finals.concat(data.worlds)),
        opacity: [0.75, 0, 0.75]
    };    
    toState(els, state.world, "world");

    state.mixed = { 
        delay: 13, 
        duration: 2,
        domain: domain,
        opacity: [0.75, 0.5, 0.75]
    };    
    toState(els, state.mixed, "mixed");

    let btns = document.querySelectorAll(".btn");
    window.setTimeout(() => {
        btns.forEach(btn => 
            btn.addEventListener("click", (e) => {
            let nameState = e.target.getAttribute("data-dots");
            let dataState = state[nameState];
            dataState.delay = 0;
            dataState.duration = 2; 
            toState(els, dataState, nameState);
            })    
        ); 
    }, 15000); 
}

function getDomain(data) {
    return {
        x: d3_extent(data, d => d.x),
            y: d3_extent(data, d => d.y)
    };
}

function toState(els, data, name) {
    let scale = getScale(data.domain);
    Object.keys(els).forEach((key, i) => {
        els[key].update(data, scale, data.opacity[i]); 
    }); 
    window.setTimeout(() => {
        d3_select(".states")
        .selectAll(".btn")
        .classed("btn-focus", false);
        d3_select(".btn-" + name) 
        .classed("btn-focus", true);
        // update info
        updateInfo(name);
    }, data.delay*1000);

}
