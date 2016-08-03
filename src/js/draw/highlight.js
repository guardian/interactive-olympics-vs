import {select as d3_select} from 'd3-selection';
import {record} from "../variables";

let preData = null;

export function showHighlightAxis(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    preData = data;
    d3_select(".mark-highlight").style("opacity", 0);
    d3_select(".js-final").classed("d-n", true);
    if (data.attrs.dist === 0) return;

    // x, y axis
    let dot = d3_select("#"+data.id);
    let x = dot.attr("cx");
    let y = dot.attr("cy");
 
    d3_select(".mark-highlight")
    .style("opacity", 1);
    
    let atpt = data.attrs;
    let atwr = record.wr.attrs;
    let ator = record.or.attrs;
    let twr = Math.round((atpt.time - atwr.time)*100)/100;

    d3_select(".hl-lv")
    .attr("x1", x).attr("x2", x)
    .attr("y1", y);
    d3_select(".hl-year").attr("y", y).text(data.attrs.year);
    d3_select(".hl-mark").attr("x", x).text(data.attrs.dist + " m (+" + twr + "s)");
    
    // wr, or
    if (d3_select(".js-chart").attr("data-state") !== "final" || 
        data.id.indexOf("wr") > -1 || data.id.indexOf("or") > -1) {
        return; 
    } 
    d3_select(".js-final").classed("d-n", false);
    
    let elwr = d3_select(".js-wr");
    let elor = d3_select(".js-or");
    // dist > 0 or hide
    d3_select(".hl-lh-wr")
    .attr("x1", x).attr("x2", elwr.attr("cx"))
    .attr("y1", elwr.attr("cy")).attr("y2", elwr.attr("cy"));
    d3_select(".hl-lh-or")
    .attr("x1", x).attr("x2", elor.attr("cx"))
    .attr("y1", elor.attr("cy")).attr("y2", elor.attr("cy"));
    
    d3_select(".hl-txt-wr")
    .attr("y", elwr.attr("cy"))
    .html(addMark(x, atpt.dist, twr, "wr"));
    
    let tor = atpt.time - ator.time;
    if (time === 0) { d3_select(".hl-txt-or").text(""); return; }
    d3_select(".hl-txt-or")
    .attr("x", x).attr("y", elor.attr("cy"))
    .html(addMark(x, atpt.dist-ator.dist, tor, "or"));
}

export function updateDotAnimation(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    // circle 
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
    hideHighlightAxis();
    hideDotAnimation();
}
export function hideHighlightAxis() {
    d3_select(".mark-highlight")
    .style("opacity", 0); 
}
export function hideDotAnimation() {
    d3_select(".hl-circle")
    .classed("animate", false)
    .style("opacity", 0);
}

function addMark(x, dist, time, type) {
    // TODO: even behind WR and OR
    return (
        "<tspan x='" + x + "' dx='5'>" + 
            "<tspan class='" + type + "-dist'>" + Math.round(dist*100)/100 + "m</tspan> " +
            "(+" + time + "s)" + 
        "</tspan>" + 
        "<tspan x='" + x + "' dx='5' dy='20'> behind " + type.toUpperCase() + "</tspan>"
    );
}
