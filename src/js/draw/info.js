import {select as d3_select} from 'd3-selection';
import {defaultHeaderTexts, colors, record} from '../variables';

export default function(data, records) {
    //console.log(data);
    if (!records) {

        cleanFields();
        d3_select(".tooltip").style("opacity", 0);
         
    } else {
        //console.log(data);

        let attrs = data.attrs;
        let event = window.location.search.replace("?", ""); 

        d3_select(".js-title").text(attrs.name);
        d3_select(".js-team").text(attrs.team);
        d3_select(".js-record").html(getRecordHtml(records, data.id)); 
        d3_select(".js-result").html(
            (isNumeric(data.color) ? 
            "rank " + data.color + " - ": 
            "<span class='icon-medal' style='background-color:" + colors[data.color] + "'></span>") +
            attrs.mark + record.type + " (" + attrs.year + ")" +
            (data.id.indexOf("wr") > -1 ? " WR" : "") + 
            (data.id.indexOf("or") > -1 ? " OR" : "") 
        );
        
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
    let select = document.querySelector("#" + data.id).getBoundingClientRect();
    let width = document.querySelector(".tooltip").offsetWidth;
    let height = document.querySelector(".tooltip").offsetHeight;// + 30;
    
    let testFinal = state === "final";
    let test1_4Bottom = select.top > chart.top + chart.height*3/4;
    let test1_3Top = select.top < chart.top + chart.height/3;
    
    /* horizontal align */
    let x = {
        l: select.left - width - 60,         // left
        c: select.left - (width/2) + data.r, // center 
        r: chart.width - width               // right 
    };
    /* vertical align */
    let y = {
        t: select.top - height - 30,         // top
        m: select.top - (height/2) + data.r, // middle
        b: select.top + data.r*2 + 30        // under 
    };

    // 1. default: middleLeft, topLeft(bottom 1/4), topCenter (fianl)
    left = testFinal ? x.c : x.l;      
    top = testFinal || test1_4Bottom ? y.t : y.m; 
    
    // 2. test and adjust outside edgs: top, left, right
    let testTop = top > chart.top;
    top = testTop ? top : chart.top;
    
    let testLeft = left > 0; 
    let testRight = left + width < chart.width;
    left = testLeft ? left : 0;
    left = testRight ? left : x.r;

    // 3. test overlay
    let testOverlay = (select.left < left + width) && (select.top + data.r*2 < top + height); 
    if (testOverlay) { top = test1_3Top ? y.b : y.t; }

    return {top: top + "px", left: left + "px"};
}
