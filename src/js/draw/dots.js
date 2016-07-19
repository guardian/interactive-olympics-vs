import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors} from '../variables';
import updateInfo from './info';

export default function(cfg) {
    let lenTime = 250;

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
    let cyShift = (d, r) => 1*((d.index-1)*2 - (d.count-1))*0.75;
    cfg.cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
    cfg.cy = (d, r, y) => y(d.y) + (d.count ? cyShift(d, r) : 0);
     
    this.init = (data, scale) => {
        cfg.scale = scale;
        data.map(dd => {dd.r = cfg.radius; return dd;});

        dots = d3_select(".dots-" + cfg.dataset)
        .selectAll(".dots")
        .data(data)
        .enter().append("circle")
        .attr("data-year", d => d.attrs.year)
        .attr("data-mark", d => d.attrs.mark)
        .attr("data-name", d => d.attrs.name)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%")
        .attr("r", cfg.radius)
        .attr("fill-opacity", () => cfg.opacity ? cfg.opacity : 0)
        .attr("fill", d => (d.color||cfg.color) ? (colors[d.color]||cfg.color) : "#000")
        .attr("stroke-opacity", () => cfg.opacity ? cfg.opacity : 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1);

        this.interactive();
    };

    // update
    this.update = (opt, scale, opacity) => {
        window.setTimeout(() => {
            cfg.scale = scale;
        }, opt.delay*1000);

        dots.transition()
        .delay(opt.delay*1000)
        .duration((opt.duration !== undefined ? opt.duration : 1)*1000)
        .attr("fill-opacity", opacity)
        .attr("stroke-opacity", opacity)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%")
        .style("pointer-events", opacity === 0 ? "none" : "all");
        //TODO: disable events on transition
        //.each(() => d3_select(this).attr("pointer-events", null));
    };

    // events
    this.interactive = () => {
        dots
        .on("mouseover", d1 => {
            let attrs = d1.attrs;
            let x = cfg.scale.x(d1.x);
            let y = cfg.scale.y(d1.y);
            //console.log(attrs);
            
            // name
            let els = d3_select(".js-chart").selectAll("circle")
            .filter(d2 => d2.attrs.name === attrs.name)
            .style("transition", "0.25s")
            .attr("r", d => d.r*2);
            
            let d1Records = els._groups[0].map(el => el.__data__);
            updateInfo(d1, d1Records);

            // hightlight 
            d3_select(".js-highlight-h").style("opacity", 1)
            .attr("y1", y + "%").attr("y2", y + "%") 
            .attr("x1", x + "%");
            d3_select(".js-highlight-v").style("opacity", 1)
            .attr("x1", x + "%").attr("x2", x + "%")
            .attr("y1", (y-1) + "%").attr("y2", (y+1) + "%"); 
        })
        .on("mouseout", d1 => {
            let attrs = d1.attrs;
            
            // name
            d3_select(".js-chart").selectAll("circle")
            .filter(d2 => d2.attrs.name === attrs.name)
            .style("transition", "0s")
            .attr("r", d => d.r);
            
            // highlight
            d3_select(".js-highlight-v").style("opacity", 0);
            d3_select(".js-highlight-h").style("opacity", 0);
        });
    };
}
