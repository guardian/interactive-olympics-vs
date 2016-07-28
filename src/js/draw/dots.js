import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync} from '../variables';
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
        data.map((dd, i) => {
            dd.r = cfg.radius; 
            dd.id = cfg.dataset.slice(0, 1) + i;
            return dd;
        });

        dots = d3_select(".dots-" + cfg.dataset)
        .selectAll(".dots")
        .data(data)
        .enter().append("circle")
        .attr("id", d => d.id)
        .attr("data-year", d => d.attrs.year)
        .attr("data-mark", d => d.attrs.mark)
        .attr("data-name", d => d.attrs.name)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%")
        .attr("r", cfg.radius)
        .attr("fill-opacity", () => 0)
        .attr("fill", d => tempColor(d))
        .attr("stroke-opacity", () => 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1)
        // interaction
        .on("mouseover", d => { 
            showBestAthlete(d); 
            d3_select(".highlight").style("opacity", 0); 
            d3_select(".dots-animate").classed("animate", false);
        })
        .on("mouseout",  d => { 
            hideAllAthletes(d); 
            showHighlightAnimate(d); 
        });

        // best of each state
        cfg.best = {};
        cfg.best = data[data.length - 1];
        // TODO: add most frequent ?
        // ...
    
        if (cfg.dataset === "world") {
            let els = dots._groups[0];
            cfg.wr = els[els.length-1].id;
        }
    };

    // update
    this.update = (opt, scale, opacity) => {
        dots
        .transition().duration(opt.duration*1000)
        .attr("fill-opacity", opacity)
        .attr("stroke-opacity", opacity)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => {
            let cy = cfg.cy(d, cfg.radius, scale.y);
            if (d.id === cfg.wr && cy > 95) { cy = 52; }
            return cy + "%";
        });

        // disable events on transition
        let elParent = d3_select(".dots-" + cfg.dataset);
        elParent.style("pointer-events", "none");

        dots.each(d => d.o = opacity); // opacity for showAtheletes
    
        let state;
        //console.log("update");
        d3_select(".highlight").style("opacity", 0); 
        d3_select(".dots-animate").classed("animate", false);
        window.setTimeout(() => {
            //if (cfg.dataset==="final") console.log(opt.delay+opt.duration, "(restart)");
            elParent.style("pointer-events", opacity === 0 ? "none" : "all");

            state = document.querySelector(".js-chart").getAttribute("data-state");
            if (state === cfg.dataset) { 
                showBestAthlete(cfg.best); 
                d3_select(".highlight").style("opacity", 0); 
                d3_select(".dots-animate").classed("animate", false);
                //console.log("after duration");
            }
        }, (opt.duration) * 1000); 

        window.setTimeout(() => {
            hideAllAthletes(cfg.best);
            if (state === cfg.dataset) { 
                showHighlightAnimate(cfg.best); 
            } 
        }, (opt.duration + 2) * 1000); 
    };
}

// interaction
function showBestAthlete(d1) {
    let attrs = d1.attrs;
    let x = sync.scale.x(d1.x);
    let y = sync.scale.y(d1.y);

    // name
    let elsAll = d3_select(".js-chart").selectAll("circle")
    .style("transition", "0.25s")
    .attr("fill-opacity", d => d.o/2);

    let elsName = elsAll
    .filter(d2 => d2.attrs.name.indexOf(attrs.name) > -1)
    .attr("fill-opacity", d => d.o === 0 ? 0 : 1)
    .attr("r", d => d.r*2);
    
    d3_select("#" + d1.id).attr("stroke", "black");

    // info
    updateInfo(d1, elsName._groups[0].map(el => el.__data__));
}

function hideAllAthletes(d1) {
    let attrs = d1.attrs;

    // name
    let elsAll = d3_select(".js-chart").selectAll("circle")
    .style("transition", "0s")
    .attr("fill-opacity", d => d.o);
    elsAll.filter(d2 => d2.attrs.name.indexOf(attrs.name) > -1)
    .attr("r", d => d.r);
    
    d3_select("#" + d1.id).attr("stroke", null);
}

function showHighlightAnimate(data) {
    let pos = document.querySelector("#" + data.id).getBoundingClientRect();
    
    d3_select(".highlight").style("opacity", 1);   
    //console.log("animate");    
    
    d3_select(".dots-animate")
    .classed("animate", true)
    .style("width", (data.r*2) + "px")
    .style("height", (data.r*2) + "px")
    .style("top", (pos.top - 1) + "px")
    .style("left", (pos.left - 1) + "px");
}
