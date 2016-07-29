import {select as d3_select} from 'd3-selection';

export default function (data) {
    //window.setTimeout(() => {
    let pos = document.querySelector("#" + data.id).getBoundingClientRect();
   
    d3_select(".highlight").style("opacity", 1); 
    
    d3_select(".dots-animate")
    .classed("animate", true)
    .style("width", (data.r*2) + "px")
    .style("height", (data.r*2) + "px")
    .style("top", (pos.top - 1) + "px")
    .style("left", (pos.left - 1) + "px");
    //}, 500);
}
