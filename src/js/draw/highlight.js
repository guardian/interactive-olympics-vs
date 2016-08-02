import {select as d3_select} from 'd3-selection';

let preData = null;
let elDot = d3_select(".hl-circle");

export function updateHighlight(data) {
    //window.setTimeout(() => {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    // dots-highlight
    let dot = d3_select("#"+data.id);
    d3_select(".hl-circle")
    .classed("animate", true)
    .attr("opacity", 1)
    .attr("cx", dot.attr("cx"))
    .attr("cy", dot.attr("cy"))
    .attr("r", dot.attr("r")); 

    preData = data;
    //}, 500);
}

export function hideHighlight() {
    d3_select(".hl-circle")
    .classed("animate", false)
    .style("opacity", 0);
}
