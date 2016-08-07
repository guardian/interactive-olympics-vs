import {select as d3_select} from 'd3-selection';
import {record, browser} from "../variables";

let preData = null;

export function showHighlightAxis(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;
    
    preData = data;
    d3_select(".mark-highlight").style("opacity", 0);
    d3_select(".js-final").classed("d-n", true);
    if (data.attrs.dist === 0) {
        /*console.log("update text", data);
        d3_select(".hl-txt-wr")
        .attr("y", "50%")
        .attr("x", "100%")
        .text("WR, OR");
        d3_select(".hl-txt-or")
        .text("");
        d3_select(".js-final").classed("d-n", false);*/
        return;
    }

    // x, y axis
    let dot = d3_select("#"+data.id);
    let x = dot.attr("cx");
    let y = dot.attr("cy");
 
    d3_select(".mark-highlight")
    .style("opacity", 1);
    
    let atpt = data.attrs;
    let atwr = record.wr.attrs;
    let ator = record.or.attrs;
    let ttwr = Math.round((atpt.time - atwr.time)*100)/100;
    let elwr = d3_select(".wr");
    let elor = d3_select(".or");
 
    let state = d3_select(".js-chart").attr("data-state");
    
    d3_select(".hl-lv")
    .attr("x1", x).attr("x2", x)
    .attr("y1", state === "final" ? elwr.attr("cy") : y);
    d3_select(".hl-year").attr("y", y).text(data.attrs.year);
    d3_select(".hl-mark").attr("x", x).text(data.attrs.dist + " m (+" + ttwr + "s)");
    
    // wr, or
    if (state !== "final") {
        return; 
    } 
    d3_select(".js-final").classed("d-n", false);
    
   let isNewRecord = record.wr.y === 2016;
    // dist > 0 or hide
    d3_select(".hl-lh-wr")
    .attr("x1", x).attr("x2", elwr.attr("cx"))
    .attr("y1", elwr.attr("cy")).attr("y2", elwr.attr("cy"));
    d3_select(".hl-lh-or")
    .attr("x1", x).attr("x2", elor.attr("cx"))
    .attr("y1", elor.attr("cy")).attr("y2", elor.attr("cy"));
    
    d3_select(".hl-txt-wr")
    .attr("y", elwr.attr("cy"))
    .html(addMark(x, atpt.dist, ttwr, "wr", isNewRecord));
    
    let ttor = Math.round((atpt.time - ator.time)*100)/100;
    if (ttor === 0) { d3_select(".hl-txt-or").text(""); return; }
    if (ttor === ttwr) { d3_select(".hl-txt-wr .behind").text("behind WR and OR"); return; }
    d3_select(".hl-txt-or")
    .attr("x", x).attr("y", elor.attr("cy"))
    .html(addMark(x, atpt.dist-ator.dist, ttor, "or", isNewRecord));
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
    .classed("animate", browser !== "ff" ? true : false)
    .style("opacity", 1)
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 6);//dot.attr("r")); 
 
     preData = data;
}
export function hideHighlight() {
    hideHighlightAxis();
    hideDotAnimation();
}
function hideHighlightAxis() {
    d3_select(".mark-highlight")
    .style("opacity", 0); 
}
export function hideDotAnimation() {
    d3_select(".hl-circle")
    .classed("animate", false)
    .style("opacity", 0);
}

const tspan = {
    "origin": { dyt: -5, dyb: 20 },   
    "record": { dyt: 36, dyb: 16 },   
};

function addMark(x, dist, time, type, isNewRecord) {
    // TODO: even behind WR and OR
    let flag = isNewRecord ? "record" : "origin";

    return (
        "<tspan x='" + x + "' dx='5' dy='" + tspan[flag].dyt + "'>" + 
            "<tspan class='" + type + "-dist'>" + Math.round(dist*100)/100 + "m</tspan> " +
            "(+" + time + "s)" + 
        "</tspan>" + 
        "<tspan x='" + x + "' dx='6' dy='" + tspan[flag].dyb + "' class='behind'>" + 
            "behind " + type.toUpperCase() + 
        "</tspan>"
    );
}
function addRecord() {
    
}
