import {select as d3_select} from 'd3-selection';
import {extent as d3_extent} from 'd3-array';
import calcScale from '../draw/scale';
import updateInfo from '../draw/info';
import Dots from '../draw/dots';
import Axis from '../draw/axis';
//import Grid from '../draw/grid';

export default function(data, dataCombo) {
    let domain = getDomain(dataCombo);
    console.log(domain);

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
        stroke: "rgba(255, 255, 255, 0.5)"
    });
    els.dotsW.init(data.worlds, scale);   

    els.axisY = new Axis({coord: "y", value: "year"});
    els.axisY.init(dataCombo.map(d => d.y), scale); 

    els.axisX = new Axis({coord: "x", value: "mark"});
    els.axisX.init(dataCombo.map(d => d.x), scale);    

    // update with animations
    let state = {};
    state.final = { 
        delay: 0, 
        duration: 2, 
        //domain: getDomain(data.finals.concat([data.medals[data.medals.length-1], data.worlds[data.worlds.length-1]])),
        domain: {
            x: [d3_extent(data.finals, d => d.x)[0], 0],
                y: [2016, 2016]
        },
        opacity: [0.75, 0, 0]
    };

    let domainMedal = getDomain(data.finals.concat(data.medals));
    domainMedal.x[1] = 0;
    state.medal = { 
        delay: 5, 
        duration: 2,
        domain: domainMedal, 
        opacity: [0.75, 0.5, 0]
    };    

    state.world = { 
        delay: 10, 
        duration: 2,
        domain: getDomain(data.finals.concat(data.worlds)),
        opacity: [0.75, 0, 0.75]
    };    

    state.mixed = { 
        delay: 15, 
        duration: 2,
        domain: domain,
        opacity: [0.75, 0.5, 0.75]
    };    

    // default 
    // toState(els, state.final, "final");
    // play states
    document.querySelector(".btn-play").addEventListener("click", () => {
        play();
    });
    let play = () => {
        Object.keys(state).map(key => {
            toState(els, state[key], [key]);
        });  
    };
    play();

    // state on event
    let btns = document.querySelectorAll(".btn");
    btns.forEach(btn => 
        btn.addEventListener("click", (e) => {
            let name = e.target.getAttribute("data-dots");
            let data = state[name];
            toState(els, {domain: data.domain, opacity: data.opacity, delay: 0, duration: 2}, name);
    }));
}

function getDomain(data) {
    return {
        x: d3_extent(data, d => d.x),
        y: d3_extent(data, d => d.y)
    };
}

function toState(els, data, name) {
    window.setTimeout(() => {
        console.log("===", name, "===", data.delay, data.duration);
    
        let scale = calcScale(data.domain);
        Object.keys(els).forEach((key, i) => {
            els[key].update(data, scale, data.opacity[i]); 
        }); 

        calcScale(data.domain);       
        d3_select(".js-chart").attr("data-state", name);

        d3_select(".states").selectAll(".btn").classed("btn-focus", false); 
        d3_select(".btn-" + name).classed("btn-focus", true);

        d3_select(".header").selectAll(".count").classed("count-focus", false);
        d3_select(".count-" + name).classed("count-focus", true);
        
        // update info
        updateInfo(name);
       
    }, (data.delay)*1000);
}
