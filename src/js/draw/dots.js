import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors} from '../variables';
import updateInfo from './info';

export default function(cfg) {
    let that = {};

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
    let cyShift = (d, r) => 1*((d.index-1)*2 - (d.count-1))*0.75;
    cfg.cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
    cfg.cy = (d, r, y) => y(d.y) + (d.count ? cyShift(d, r) : 0);
    
    that.init = (data, scale) => {
        cfg.scale = scale;
        data.map((dd, i) => {
            dd.r = cfg.radius; 
            dd.id = cfg.dataset.slice(0, 1) + i;
            return dd;
        });

        dots = d3_select(".dots-" + cfg.dataset)
        .selectAll(".dots")
        .data(data)
        .enter().append("circle")
        .attr("id", d => d.id)
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

        that.interactive();
    };

    // update
    that.update = (opt, scale, opacity) => {
        dots
        .transition()
        .delay(opt.delay*1000 || 0)
        .duration((opt.duration || 2) * 1000)
        .attr("fill-opacity", opacity)
        .attr("stroke-opacity", opacity)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%");
 
        // disable events on transition
        let elParent = d3_select(".dots-" + cfg.dataset);
        // start
        window.setTimeout(() => {
            if (cfg.dataset==="final") console.log("delay", opt.delay, "duration:", opt.duration);
            //if (cfg.dataset==="final") console.log(opt.delay, "(pause)");
            //console.log(cfg.dataset, opacity);
            elParent.style("pointer-events", "none");
            cfg.scale = scale;
            dots.each(d => d.o = opacity); 
        }, opt.delay * 1000); 
        // end
        window.setTimeout(() => {
            //if (cfg.dataset==="final") console.log(opt.delay+opt.duration, "(restart)");
            elParent.style("pointer-events", opacity === 0 ? "none" : "all");
        }, (opt.delay + opt.duration) * 1000); 
    };

    // events
    let elsAll, elsName;
    that.interactive = () => {
        dots
        .on("mouseover", d1 => {
            let attrs = d1.attrs;
            let x = cfg.scale.x(d1.x);
            let y = cfg.scale.y(d1.y);
            //console.log(attrs);
            
            // name
            elsAll = d3_select(".js-chart").selectAll("circle")
            .style("transition", "0.25s")
            .attr("fill-opacity", d => d.o/2);

            elsName = elsAll
            .filter(d2 => d2.attrs.name === attrs.name)
            .attr("fill-opacity", d => d.o === 0 ? 0 : 1)
            .attr("r", d => d.r*2);
            
            let d1Records = elsName._groups[0].map(el => el.__data__);
            updateInfo(d1, d1Records);

            // hightlight 
            d3_select(".js-highlight-h").style("opacity", 1)
            .attr("y1", y + "%").attr("y2", y + "%") 
            .attr("x1", x + "%");
            d3_select(".js-highlight-l").style("opacity", 1)
            .attr("x1", x + "%").attr("x2", x + "%")
            .attr("y1", (y-1) + "%").attr("y2", (y+1) + "%"); 
            d3_select(".js-highlight-r").style("opacity", 1)
            .attr("y1", (y-1) + "%").attr("y2", (y+1) + "%"); 
        })
        .on("mouseout", d1 => {
            let attrs = d1.attrs;
            
            // name
            let elsAll = d3_select(".js-chart").selectAll("circle")
            .style("transition", "0s")
            .attr("fill-opacity", d => d.o);
            elsAll.filter(d2 => d2.attrs.name === attrs.name)
            .attr("r", d => d.r);
            
            // highlight
            d3_select(".js-highlight-l").style("opacity", 0);
            d3_select(".js-highlight-r").style("opacity", 0);
            d3_select(".js-highlight-h").style("opacity", 0);
        });
    };
    
    return that;
}
