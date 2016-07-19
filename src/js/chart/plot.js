import {colors, chart, padding} from '../variables';
import utils from '../lib/utils';
import getScale from './scale';
import {select as d3_select} from 'd3-selection';
import {line, area as d3_line, d3_area} from 'd3-shape';
import Axis from './axis';
import Mark from './mark';
import Grid from './grid';
import Dots from './dots';
import Rect from './rect';

export default function (el, cfg, opt) {
    /* chart size and scale */
    // TODO: remove x, y 
    let scale = getScale(cfg.domain);
    let x = scale.x;
    let y = scale.y;
    
    /* compose charts */
    let parent = "#" + el.attr("id") + " ." + cfg.classname;
    
    // chart, svg, divs
    let plot, svg; 

    plot = el.append("div")
    .attr("class", "plot " + cfg.classname);
    
    plot.append("div")
    .attr("class", "js-headline");
    //.text();

    svg = plot.append("svg")
    .attr("width", chart.w)
    .attr("height", chart.h)
    .style("padding", chart.padding + "px");

    plot.append("div")
    .attr("class", "js-hightlight");

    // plot chart
    svg.append("g") .attr("class", "axis");
    svg.append("g") .attr("class", "line-ruler");
    svg.append("g") .attr("class", "line-marks");

    // background depends on event type
    svg.append("g") .attr("class", "line-frame")
    .selectAll(".frame")
    .data([0, chart.w])
    .enter().append("line")
    .attr("x1", d => d)
    .attr("x2", d => d)
    .attr("y1", 0)
    .attr("y2", chart.h)
    .attr("stroke", "#333")
    .attr("stroke-width", 6)
    .attr("stroke-linecap", "round");
              
    let optParent = opt;
    
    this.axis = (data, cfg) => {
        let axis = new Axis(data, cfg, el, svg, x, y);
        axis.draw();
        axis.animate(optParent);
    };

    this.ruler = (data, cfg) => {
        let grid = new Grid(data, cfg, el, svg, x, y, parent);
        grid.draw();
        grid.animate(optParent);
        grid.events();
    };

    this.marks = (data, cfg) => {
        let mark = new Mark(data, cfg, el, svg, x, y);
        mark.draw();
        mark.animate(optParent);
    };

    this.dots = (data, cfg, opt) => {
        let dots = new Dots(data, cfg, el, svg, x, y, parent);
        opt = optParent ? Object.assign(opt, optParent) : opt;
        dots.draw();
        dots.animate(opt);
        dots.events();
    };
    
    this.rects = (data, cfg, opt) => {
        let rect = new Rect(data, cfg, el, svg, scale);
        rect.draw();
        rect.animate(opt);
    };
    
    /*this.paths = (data, cfg) => {
        let path = d3_line()
        .x(d => x(d.x))
        .y(d => y(d.y));

        svg.append("g")
        .attr("class", cfg.classname)
        .selectAll(".line")
        .data(data)
        .enter().append("path")
        .attr("stroke", cfg.color)
        .attr("fill", "none")
        .attr("d", path);
    };

    this.areas = (data, cfg) => {
        let len = data.length + 1;
        let area = d3_area()
        .x(d => x(d.x))
        .y0(chart.h)
        .y1(d => y(d.y));

        svg.append("g")
        .attr("class", cfg.classname)
        .selectAll(".area")
        .data(data)
        .enter().append("path")
        .attr("fill", (d, i) => "rgba(0, 125, 250, " + (0.5/(len-i)) +")")
        .attr("d", area);
    };*/ 
}
