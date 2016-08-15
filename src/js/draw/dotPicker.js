import {select as d3_select} from 'd3-selection';
import {voronoi as d3_voronoi} from 'd3-voronoi';
import {sync, chart} from '../variables';
import {showBestAthlete, hideAllAthletes} from './dots';
import {updateDotAnimation, hideDotAnimation} from './highlight';

// ref: bl.ocks.org/njvack/1405439
// ref: bl.ocks.org/mbostock/ec10387f24c1fad2acac3bc11eb218a5
const radius = 20;

let picks, paths;
let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
let cyShift = (d, r) => 0.5*((d.index-1)*2 - (d.count-1))*0.5;
let cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
let cy = (d, r, y) => y(d.y) - (d.count ? cyShift(d, r) : 0);

let w, h;
let dataPickAll;
let dataPickVisible;
let dataGoldX;
let dataPath = (scale) => {
    let voronoi = d3_voronoi()
    .x(function(d) { return cx(d, radius, scale.x)*w/100; })
    .y(function(d) { return cy(d, radius, scale.y)*h/100; })
    .extent([[0, 0], [w, h]]);
    return voronoi.polygons(dataPickVisible);
};

export function initPicker (data) {
    let chartRect = document.querySelector(".chart").getBoundingClientRect();
    w = chartRect.width - 45;
    h = chartRect.height - 21;
    dataPickAll = data;
}

export function updatePicker(scale) {
    dataPickVisible = dataPickAll.filter(d => d.o !== 0);
    dataGoldX = dataPickVisible.filter(d => d.color === "gold").map(d => d.x);
    dataPickVisible = dataPickVisible.filter(d => {
        let isOverlapped = (d.color === "wr") && (dataGoldX.some(gx => gx === d.x));
        return !isOverlapped;
    });

    let picker = d3_select(".dots-picker");
    picker.selectAll("g").remove();
    
    let circle = picker.selectAll("g")
    .data(dataPickVisible).enter()
    .append("g");

    circle
    .append("clipPath")
    .attr("id", (d, i) => "clip-" + i)
    .append("circle")
    .attr("data-id", d => d.id)
    .attr("cx", d => cx(d, radius, scale.x) + "%")
    .attr("cy", d => cy(d, radius, scale.y) + "%")
    .attr("r", radius);
    
    circle
    .append("path")
    .data(dataPath(scale))
    .attr("d", renderCell)
    .attr("id", (d, i) => "path-" + i)
    .attr("clip-path", (d, i) => "url(#clip-" + i + ")")
    // interaction
    .on("mouseover", (d, i) => {
        let state = d3_select(".js-chart").attr("data-state");
        showBestAthlete(dataPickVisible[i], state); 
        hideDotAnimation(); 
    })
    .on("mouseout",  (d, i) => { 
        hideAllAthletes(dataPickVisible[i]);
        updateDotAnimation(dataPickVisible[i]);
    });
}

function renderCell(d) {
    return d === null ? null : "M" + d.join("L") + "Z";
}
