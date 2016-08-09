import {select as d3_select} from 'd3-selection';
import {defaultHeaderTexts, colors, record} from '../variables';

export default function(data, records) {
    //console.log(data);
    if (!records) {

        cleanFields();
        d3_select(".tooltip").style("opacity", 0);
         
    } else {
        let attrs = data.attrs;
        let event = d3_select(".js-interactive").attr("data-event");

        // data
        d3_select(".js-title").text(attrs.name);
        d3_select(".js-team").text(attrs.team);
        d3_select(".js-record").html(getRecordHtml(records, data.id)); 
        d3_select(".js-result").html(
            (isNumeric(data.color) ? 
            "rank " + data.color + " - ": 
            "<span class='icon-medal' style='background-color:" + colors[data.color] + "'></span>") +
            attrs.mark + record.type + " (" + attrs.year + ")" +
            (data.x === record.wr.x ? " WR " : "") + 
            (data.x === record.or.x ? " OR" : "") 
        );
        
        // position
        updateInfoPosition(data); 
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function cleanFields() {
    let keys = ["title", "team", "result", "record"];
    //let keys = ["headline", "team", "final", "medal", "world", "standfirst"];
    keys.forEach(key => d3_select(".js-" + key).text(""));
}

function getRecordHtml(records, id) {
    // TODO: double check calc
    let cf = records.filter(dr => isNumeric(dr.color)).length; 
    let cw = records.filter(dr => dr.color === "wr").length;
    let cm = records.length - cf - cw; 
    let tw = cw > 1 ? " WRs" : " wr";
    let tm = cm > 1 ? " medals" : " medal";
    
    return (
        (cm > 0 ? cm + tm : "") + 
        (cm > 0 && cw >0 ? " and " : "") + 
        (cw > 0 ? cw + tw : "")
    );
}

let preData = null;
export function updateInfoPosition(data) {
    if (!data && !preData) return;
    if (!data && preData) data = preData;

    let pos = getInfoPos(data);       
    d3_select(".tooltip").style("opacity", 1)
    .style("top", pos.top)
    .style("left", pos.left);
    
    preData = data;
}

function getInfoPos (data) {
    let top, left;
    let alignTop, alignLeft;

    let state = d3_select(".js-chart").attr("data-state"); 
    let chart = document.querySelector(".js-chart").getBoundingClientRect();
    let point = document.querySelector("#" + data.id).getBoundingClientRect();
    let eltp = document.querySelector(".tooltip"); 
    let tooltip = {
        width : eltp.offsetWidth,
        height: eltp.offsetHeight // + 30;
    };
    
    let testFinal = state === "final";
    let test1_4Bottom = point.top > chart.top + chart.height*3/4;
    let test1_3Top = point.top < chart.top + chart.height/3;

    /* horizontal align */
    let x = {
        l: point.left - tooltip.width - 60,         // left
        c: point.left - (tooltip.width/2) + data.r, // center 
        r: point.left + data.r - 1                  // right 
    };
    /* vertical align */
    let y = {
        t: point.top - tooltip.height - 30,         // top
        m: point.top - (tooltip.height/2) + data.r, // middle
        b: point.top + data.r*2 + 30        // under 
    };

    // 1. default: middleLeft, topLeft (bottom 1/4) 
    left = testFinal ? x.c : x.l;      
    top = test1_4Bottom ? y.t : y.m; 
    
    // 2. test and adjust outside edgs: top, left, right
    let testTop = top > chart.top;
    top = testTop ? top : chart.top;
    
    let testLeft = left > 0; 
    let testRight = left + tooltip.width < chart.width;
    left = testLeft ? left : 0; // left end
    left = testRight ? left : chart.width - tooltip.width; // right end

    // 3. test overlay
    let testOverlay = (point.left < left + tooltip.width) && (point.top + data.r*2 < top + tooltip.height); 
    if (testOverlay) { top = test1_3Top ? y.b : y.t; }
    
    // 4. topCenter (fianl)
    if (testFinal) {
        let pointTop = document.querySelector(".final circle")
        .getBoundingClientRect().top;
        top = pointTop - tooltip.height - 35;
    }

    return {top: top + "px", left: left + "px"};
}
