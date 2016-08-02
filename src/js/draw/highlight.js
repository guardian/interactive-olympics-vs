import {select as d3_select} from 'd3-selection';

let preData = null;

export function showHighlightMark(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    // dots-highlight
    let dot = d3_select("#"+data.id);
    let x = dot.attr("cx");
    let y = dot.attr("cy");
 
    d3_select(".mark-highlight")
    .style("opacity", 1);
    
    d3_select(".hl-lv")
    .attr("x1", x).attr("x2", x)
    .attr("y1", y);
    d3_select(".hl-year").attr("y", y).text(data.attrs.year);
    d3_select(".hl-mark").attr("x", x).text(data.attrs.dist + " m");

    preData = data;
}

export function showHighlightAnimate(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    // dots-highlight
    let dot = d3_select("#"+data.id);
    let x = dot.attr("cx");
    let y = dot.attr("cy");
    let year = data.attrs.year;
    let mark = data.attrs.mark;
       
    d3_select(".hl-circle")
    .classed("animate", true)
    .style("opacity", 1)
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", dot.attr("r")); 
 
     preData = data;
}
export function hideHighlight() {
    hideHighlightMark();
    hideHighlightAnimate();
}
export function hideHighlightMark() {
    d3_select(".mark-highlight")
    .style("opacity", 0); 
}
export function hideHighlightAnimate() {
    d3_select(".hl-circle")
    .classed("animate", false)
    .style("opacity", 0);
}
