import {select as d3_select} from 'd3-selection';
import {voronoi as d3_voronoi} from 'd3-voronoi';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync} from '../variables';
import {showHighlightAxis, updateDotAnimation, hideHighlight, hideHighlightAxis, hideDotAnimation} from './highlight';
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

        // test point picker
        //test(data);
        // end of test

        dots = d3_select("." + cfg.dataset)
        .selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("id", d => d.id)
        .attr("class", (d, i) => {
            let cn = "";
            if (cfg.dataset === "world" && i === data.length-1) cn += "js-wr wr "; 
            if (cfg.dataset === "medal" && i === data.length-1) cn += "js-or or ";
            return cn ? cn.trim() : null; 
        })
        .attr("data-year", d => d.attrs.year)
        .attr("data-mark", d => d.attrs.mark)
        .attr("data-name", d => d.attrs.name)
        .attr("cx", d => 0)//cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => "50%")//cfg.cy(d, cfg.radius, scale.y) + "%")
        .attr("r", cfg.radius)
        .attr("fill-opacity", 0)
        .attr("fill", d => tempColor(d))
        .attr("stroke-opacity", 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1)
        // interaction
        .on("mouseover", d => { 
            showBestAthlete(d, cfg.dataset); 
            hideDotAnimation(); 
        })
        .on("mouseout",  d => { 
            hideAllAthletes(d);
            updateDotAnimation(d);
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
        .attr("stroke-opacity", opacity!==0 ? 0.8 : 0)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%");

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
                showBestAthlete(cfg.best, state); 
            } else if (state === "mixed") {
                d3_select(".btn-next")
                .style("pointer-events", "all")
                .classed("btn-disable", false);
            }
        }, (opt.duration+0.5) * 1000); 

        window.setTimeout(() => {
            hideAllAthletes(cfg.best);

            if (state === cfg.dataset) { 
                updateDotAnimation(cfg.best); 
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
let select = {
    all: null,
    related: null,
    pre: null,
    //wr: null,
    //or: null
};

function showBestAthlete(d1, state) {
    let attrs = d1.attrs;
    let x = sync.scale.x(d1.x);
    let y = sync.scale.y(d1.y);

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
        d3_select(".js-wr")
        .classed("o-15", d2 => d2.attrs.name.indexOf(attrs.name) === -1 ? true : false);
        d3_select(".js-or")
        .classed("o-15", d2 => d2.attrs.name.indexOf(attrs.name) === -1 ? true : false);
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

function hideAllAthletes(d1) {
    let attrs = d1.attrs;

    select.all
    .classed("o-1", false).classed("o-15", false)
    .style("transition", "0s");

    select.related.attr("r", d => d.r);
}

function test(data) {
    var voronoi = d3_voronoi()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .extent([[-1, -1], [d3_select("svg").attr("width") + 1, d3_select("svg").attr("height") + 1]]);
    // TODO:
    // http://bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5 
    d3_select(".path").selectAll(".any")
    .data(voronoi.ploygons(data))
    .enter().append("path")
    .attr("d", function(d) { return "M" + d.join(",") + "Z"; })
    .attr("id", function(d,i) { return "path-"+i; })
    .attr("clip-path", function(d,i) { return "url(#clip-"+i+")"; })
    .style('fill-opacity', 0.4)
    .style("fill", rgba(200,200,200, 0.25))
    .style("stroke", rgba(200,200,200, 0.5));
}

function renderCell(d) {
      return d === null ? null : "M" + d.join("L") + "Z";
}
