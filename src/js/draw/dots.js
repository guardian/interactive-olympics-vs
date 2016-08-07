import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync, record} from '../variables';
import {showHighlightAxis, updateDotAnimation, hideHighlight, hideDotAnimation} from './highlight';
import updateInfo from './info';

let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
let cyShift = (d, r) => 0.5*((d.index-1)*2 - (d.count-1))*0.5;
let cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
let cy = (d, r, y) => y(d.y) - (d.count ? cyShift(d, r) : 0);

export default function(cfg) {

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let tempColor = (d) => {
        return (colors[d.color]||cfg.color) ? (colors[d.color]||cfg.color) : colors.others;
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

        dots.style("transition", "0s")
        .each(d => { 
            //if (d.cn) console.log(d.cn);
            d.o = d.cn ? 1 : opacity;
            d.o = (d.cn === "temp" && d3_select(".js-chart").attr("data-state") === "final") ? 1 : opacity;
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

        let state;
        let delay1 = opt.duration ? opt.duration : 0.5;
        let delay2 = opt.duration ? opt.duration + 3 : 0.5;
        
        // after animation
        window.setTimeout(() => {
            state = d3_select(".js-chart").attr("data-state");
            if (state === cfg.dataset) { 
                showBestAthlete(cfg.best, state); 
            } else if (state === "mixed") {
                //console.log("free");
                btnStates.classed("enable", true);
                dotPicker.classed("enable", true);
            }
        }, delay1*1000); 
        
        // after highlight
        window.setTimeout(() => {
            hideAllAthletes(cfg.best);

            if (state === cfg.dataset) { 
                updateDotAnimation(cfg.best); 
                //console.log("free");
                btnStates.classed("enable", true);
                dotPicker.classed("enable", true);
            }  

        }, delay2*1000); 
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
    select.all = d3_select(".js-chart")
    .selectAll(".dots circle")
    .style("transition", "0.25s")
    .classed("o-15", d => d.o !== 0 ? true : false);

    select.related = select.all
    .filter(d2 => d2.attrs.name.indexOf(attrs.name) > -1)
    .classed("o-1", d => d.o !== 0 ? true : false)
    .attr("r", d => d.r*2);

    if (state !== "final") { 
        ["or", "wr"].forEach((type) => {
            d3_select("#" + record[type].id)
            .classed("o-15", d2 => d2.attrs.name.indexOf(attrs.name) === -1 ? true : false);
        });
    }
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

    select.all
    .classed("o-1", false).classed("o-15", false)
    .style("transition", "0s");

    select.related.attr("r", d => d.r);
}
