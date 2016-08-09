import {select as d3_select} from 'd3-selection';
import {record, browser} from "../variables";

let preData = null;

export function showHighlightAxis(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;
    
    preData = data;
    d3_select(".mark-highlight").style("opacity", 0);
    d3_select(".js-final").classed("d-n", true);

    /* x, y axis */
    let dot = d3_select("#"+data.id);
    let x = dot.attr("cx");
    let y = dot.attr("cy");
 
    d3_select(".mark-highlight")
    .style("opacity", 1);
    
    let atpt = data.attrs;
    let atwr = record.wr.attrs;
    let ator = record.or.attrs;
    let elwr = d3_select(".wr");
    let elor = d3_select(".or");

    let iswr = !record.wr.notAvailable;
    let ttwr = iswr ? Math.round((atpt.time - atwr.time)*100)/100 : null;
    let ttor = Math.round((atpt.time - ator.time)*100)/100;
    let time = iswr ? ttwr : ttor;
    
    let state = d3_select(".js-chart").attr("data-state");
    let y1lv = () => {
        //let top = document.querySelector(".final circle")
        //.getBoundingClientRect().top;
        return state === "final" ? "28%" : y;
    };
    
    d3_select(".hl-lv")
    .attr("x1", x).attr("x2", x)
    .attr("y1", y1lv);
    d3_select(".hl-year").attr("y", y).text(data.attrs.year);
    d3_select(".hl-mark").attr("x", x).text(
        data.attrs.dist === 0 ?
        "0" : data.attrs.dist + " m (+" + time + "s)"
    );
    
    /* wr, or */
    if (state !== "final" || data.attrs.dist === 0) { return; } 
    d3_select(".js-final").classed("d-n", false);
    
    // wr, ps. some events don't have WRs
    if (iswr) { 
    
    let isNewRecord = record.wr.y === 2016;
    let flag = isNewRecord ? "record" : "origin";
    
    d3_select(".hl-lh-wr")
    .attr("x1", x).attr("x2", elwr.attr("cx"))
    .attr("y1", elwr.attr("cy")).attr("y2", elwr.attr("cy"));
    
    d3_select(".hl-txt-wr")
    .attr("y", elwr.attr("cy"))
    .html(addMark(x, atpt.dist, ttwr, "wr", flag));
    }

    // or
    d3_select(".hl-lh-or")
    .attr("x1", x).attr("x2", elor.attr("cx"))
    .attr("y1", elor.attr("cy")).attr("y2", elor.attr("cy"));
 
    // or === wr
    if (iswr && ttor === time) { d3_select(".hl-txt-wr .behind").text("behind WR and OR"); return; }

    d3_select(".hl-txt-or")
    .attr("x", x).attr("y", elor.attr("cy"))
    .html(addMark(x, atpt.dist-ator.dist, ttor, "or", "bottom"));
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
    "origin": { dyt: -20, dyb: 12 },  //top 
    "bottom": { dyt:  25, dyb: 12 },  //bottom1 
    "record": { dyt:  35, dyb: 12 },  //bottom2 
};

function addMark(x, dist, time, typeRecord, flag) {
    // TODO: even behind WR and OR

    return (
        "<tspan x='" + x + "' dx='10' dy='" + tspan[flag].dyt + "'>" + 
            "<tspan class='" + typeRecord + "-dist'>" + Math.round(dist*100)/100 + "m</tspan> " +
            "(+" + time + "s)" + 
        "</tspan>" + 
        "<tspan x='" + x + "' dx='11' dy='" + tspan[flag].dyb + "' class='behind'>" + 
            "behind " + typeRecord.toUpperCase() + 
        "</tspan>"
    );
}
