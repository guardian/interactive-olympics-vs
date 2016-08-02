import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync} from '../variables';
import {updateHighlight, hideHighlight} from './highlight';
import updateInfo from './info';

export default function(cfg) {

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
    let cyShift = (d, r) => 1*((d.index-1)*2 - (d.count-1))*0.75;
    cfg.cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
    cfg.cy = (d, r, y) => y(d.y) + (d.count ? cyShift(d, r) : 0);

    let tempColor = (d) => {
        return (colors[d.color]||cfg.color) ? (colors[d.color]||cfg.color) : colors.others;
    };

    this.init = (data, scale) => {
        cfg.ilast = data.length - 1;
        let idTexts = {"world": "wr", "medal": "or", "final": "gm"}; 
        data.map((dd, i) => {
            dd.r = cfg.radius; 
            dd.id = cfg.dataset.slice(0, 1) + i + (i===cfg.ilast? "-" + idTexts[cfg.dataset] : "");
            return dd;
        });

        dots = d3_select("." + cfg.dataset)
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("id", d => d.id)
        .attr("data-year", d => d.attrs.year)
        .attr("data-mark", d => d.attrs.mark)
        .attr("data-name", d => d.attrs.name)
        .attr("cx", d => 0)//cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => "50%")//cfg.cy(d, cfg.radius, scale.y) + "%")
        .attr("r", cfg.radius)
        .attr("fill-opacity", () => 0)
        .attr("fill", d => tempColor(d))
        .attr("stroke-opacity", () => 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1)
        // interaction
        .on("mouseover", d => { 
            showBestAthlete(d); 
            hideHighlight(); 
        })
        .on("mouseout",  d => { 
            hideAllAthletes(d);
            updateHighlight(d);
        });

        // best of each state
        cfg.best = {};
        cfg.best = data[cfg.ilast];
        // TODO: add most frequent ?
        // ...
    };

    // update
    this.update = (opt, scale, opacity) => {
        //let delay = cfg.dataset === "world" ? 0.1:1;//cfg.ilast/(opt.duration*1000) : 0;
        //console.log(cfg.dataset, delay, cfg.ilast);

        dots.style("transition", "0s")
        .each(d => d.o = opacity)
        .transition()
        //.delay((d, i) => i*delay)
        .duration(opt.duration*1000)
        .attr("fill-opacity", opacity)
        .attr("stroke-opacity", opacity)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => {
            let cy = cfg.cy(d, cfg.radius, scale.y);
            if (d.id.indexOf("wr") && cy > 95) { cy = 60; }
            return cy + "%";
        });

        // disable events on transition
        // console.log("event lock");
        let elParent = d3_select("." + cfg.dataset);
        elParent.style("pointer-events", "none");
        hideHighlight(); 
        
        let state;
        window.setTimeout(() => {
            state = d3_select(".js-chart").attr("data-state");
            if (state === cfg.dataset) { 
                //console.log("highlight");
                showBestAthlete(cfg.best); 
            } else if (state === "mixed") {
                d3_select(".btn-next")
                .style("pointer-events", "all")
                .classed("btn-disable", false);
            }
        }, (opt.duration+0.5) * 1000); 

        window.setTimeout(() => {
            hideAllAthletes(cfg.best);
            
            if (state === cfg.dataset) { 
                updateHighlight(cfg.best); 
                d3_select(".btn-next")
                .style("pointer-events", "all")
                .classed("btn-disable", false);
            }  
            
            //console.log("event free");
            elParent.style("pointer-events", opacity === 0 ? "none" : "all");
        }, (opt.duration + 3) * 1000); 
    };
}

// interaction
let selectAllDots = null;
let selectDotRelated = null;
let selectDotPre = null;

function showBestAthlete(d1) {
    let attrs = d1.attrs;
    let x = sync.scale.x(d1.x);
    let y = sync.scale.y(d1.y);

    // name
    selectAllDots = d3_select(".js-chart")
    .selectAll(".dots circle")
    .style("transition", "0.25s")
    .attr("fill-opacity", d => d.o !== 0 ? 0.15 : 0);
    
    selectDotRelated = selectAllDots
    .filter(d2 => d2.attrs.name.indexOf(attrs.name) > -1)
    .attr("fill-opacity", d => d.o === 0 ? 0 : 1)
    .attr("r", d => d.r*1.5);
    
    if (selectDotPre) { selectDotPre.attr("stroke", null); }
    hideHighlight();

    selectDotPre = d3_select("#" + d1.id)
    .attr("stroke", "black")
    .attr("r", d => d.r*2);
 
    // info
    updateInfo(d1, selectDotRelated._groups[0].map(el => el.__data__));
}

function hideAllAthletes(d1) {
    let attrs = d1.attrs;

    // name
    selectAllDots.attr("fill-opacity", d => d.o).style("transition", "0s");
    selectDotRelated.attr("r", d => d.r);
}
