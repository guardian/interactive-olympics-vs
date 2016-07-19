import {axisBottom as d3_axisBottom} from 'd3-axis';
import {chart} from '../variables';
import scale from './scale';

export default function(data, cfg, el, svg, x, y) {
    let axisYear = d3_axisBottom(x);
    //let axisY = d3_axis.scale(y).orient("left");

    /*if (data.y) {
      axisY.tickValues(data.y);
      svg.append("g")
      .attr("class", "y axis")
      .call(axisY);
    }*/   
    let axisX;
    this.draw = () => {
    if (data.x) {
        axisYear.tickValues(data.x).tickFormat(d => d);
        
        axisX = svg
        //.insert("g", ":first-child")
        .select(".axis")
        .attr("fill", "#ccc")
        .attr("transform", "translate(0," + chart.h + ")")
        .call(axisYear);
        
        axisX.select(".domain")
        .style("display", "none");
        
        axisX.selectAll("line")
        .style("stroke", "#ccc")
        .style("shape-rendering", "auto")
        .style("transform", "rotate(30deg)");
        axisX.selectAll("text")
        .style("fill", "#bbb")
        .style("font-family", "monospace")
        .style("font-size", "14px");
    }};

    this.animate = (opt) => {
        if (!opt) return;
        if (opt.domain.str.x) {
        let axisYearStr = d3_axisBottom(scale(opt.domain.str).x);
        let axisYearEnd = d3_axisBottom(scale(opt.domain.end).x);
        axisYearStr.tickValues(data.x).tickFormat(d => d);
        axisYearEnd.tickValues(data.x).tickFormat(d => d);
        axisX
        .call(axisYearStr)
        .transition()
        .duration(opt.duration)
        .call(axisYearEnd);
        }
    };
}
