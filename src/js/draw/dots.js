import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync, record} from '../variables';
import {showHighlightAxis, updateDotAnimation, hideHighlight, hideDotAnimation} from './highlight';
import updateInfo from './info';

const sHighlight = 1;

let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
let cyShift = (d, r) => 0.5*((d.index-1)*2 - (d.count-1))*0.5;
let cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
let cy = (d, r, y) => y(d.y) - (d.count ? cyShift(d, r) : 0);

export default function(cfg) {

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let event = d3_select(".js-interactive").attr("data-event"); 
    let tempColor = (d) => {
        let defaultColor = event.indexOf("run") > -1 ? "runner" : "others";
        return (colors[d.color]||cfg.color) ? (colors[d.color]||cfg.color) : colors[defaultColor];
    };

    this.init = (data, scale) => {
        cfg.ilast = data.length - 1;
        data.map((dd, i) => {
            dd.r = cfg.radius; 
            dd.id = cfg.dataset.slice(0, 1) + i;
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
        .attr("cx", d => cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cy(d, cfg.radius, scale.y) + "%")
        .attr("r", cfg.radius)
        .attr("fill-opacity", 0)
        .attr("fill", d => tempColor(d))
        .attr("stroke-opacity", 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1);

        // best of each state for highlight
        cfg.best = cfg.dataset !== "medal" ? data[cfg.ilast] : record.or;

        // TODO: add most frequent ?
        // ...
    };

    // update
    this.update = (opt, scale, opacity) => {
        //let delay = cfg.dataset === "world" ? 0.1:1;//cfg.ilast/(opt.duration*1000) : 0;
        //console.log(cfg.dataset, delay, cfg.ilast);

        let state = d3_select(".js-chart").attr("data-state");
        dots.style("transition", "0s")
        .each(d => { 
            d.o = opacity;
            if (state === "final" && d.cn === "temp") {
                d.o = 0.5;
            } else if (d.cn === "wr" || d.cn === "or") { 
                d.o = 1;
            } 
            //if (d.cn) console.log(d.cn);
        })
        .transition()
        //.delay((d, i) => i*delay)
        .duration(opt.duration*1000)
        .attr("fill-opacity", d => d.o)
        .attr("stroke-opacity", opacity!==0 ? 0.8 : 0)
        .attr("cx", d => cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cy(d, cfg.radius, scale.y) + "%");

        // disable events on transition
        let btnStates = d3_select(".btn-next");
        let dotPicker = d3_select(".dots-picker");
        hideHighlight(); 

        let delay1 = opt.duration ? opt.duration : 0;
        let delay2 = opt.duration ? opt.duration + sHighlight : 0;
        
        if (state === cfg.dataset) { 
            
            // after animation
            window.setTimeout(() => {
                    showBestAthlete(cfg.best, state); 
            }, delay1*1000); 
            
            // after highlight
            window.setTimeout(() => {
                hideAllAthletes(cfg.best);
                    updateDotAnimation(cfg.best); 
                    //console.log("free");
                    btnStates.classed("enable", true);
                    dotPicker.classed("enable", true);
            }, delay2*1000);

        } else if (state === "mixed") {
            
            // after animation
            window.setTimeout(() => {
                //console.log("free");
                btnStates.classed("enable", true);
                dotPicker.classed("enable", true);
            }, delay1*1000); 
        }
    };
}

// interaction
let select = {
    all: null,
    related: null,
    pre: null,
};

export function showBestAthlete(d1, state) {
    let attrs = d1.attrs;

    // change opacity
    // - all visible dots
    select.all = d3_select(".js-chart")
    .selectAll(".dots circle")
    .style("transition", "0.25s")
    .classed("o-2", d => d.o !== 0 ? true : false);
    // - related dot(s)
    select.related = select.all
    .filter(d2 => d2.attrs.name.indexOf(attrs.name) > -1)
    .classed("o-1", d => d.o !== 0 ? true : false)
    .attr("r", d => d.r*2);
    // - or, wr
    ["or", "wr"].forEach((type) => {
        d3_select("." + type).classed("o-5", state === "final" ? true : false);
    });
   
    // remove stroke on previous selected
    if (select.pre) { select.pre.attr("stroke", null); }
    // add stroke to current selected
    select.pre = d3_select("#" + d1.id)
    .attr("stroke", "black");

    // update info and highlight 
    updateInfo(d1, select.related._groups[0].map(el => el.__data__));
    hideDotAnimation();
    showHighlightAxis(d1);
}

export function hideAllAthletes(d1) {
    let attrs = d1.attrs;

    select.all.classed("o-1", false).classed("o-2", false);
    select.related.attr("r", d => d.r);

    ["or", "wr"].forEach((type) => {
        d3_select("." + type).classed("o-5", false);
    }); 
}
