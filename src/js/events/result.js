import {extent as d3_extent} from 'd3-array';
import {toState, getNextState} from '../draw/state';
import calcScale from '../draw/scale';
import Dots from '../draw/dots';
import Axis from '../draw/axis';
import utils from '../lib/utils';
//import Grid from '../draw/grid';

export default function(data, dataCombo) {
    let domain = getDomain(dataCombo);
    //console.log(domain);

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
            y: [2016 - diff*2, 2016 + diff*2]
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
    /*/ play states
    document.querySelector(".btn-play").addEventListener("click", () => {
        play();
    });
    let play = () => {
        Object.keys(state).map(key => {
            toState(els, state[key], [key]);
        });  
    };
    //play();*/

    // state on event
    let btns = utils.nlist2arr(document.querySelectorAll(".btn"));
    btns.forEach(btn => 
        btn.addEventListener("click", (e) => {
            let name = e.target.getAttribute("data-dots");
            let data = state[name];
            toState(els, {domain: data.domain, opacity: data.opacity, duration: 2}, name);
    }));
    
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
