import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import scale from './scale';
import utils from '../lib/utils';
import {colors} from '../variables';

export default function(data, cfg, el, svg, x, y, parent) {
    let lenTime = 250;
    let lenData = data.length - 1;
    let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;

    let dots;
    this.draw = () => {
        dots = svg.append("g")
        .attr("class", cfg.classname)
        .selectAll(".dots")
        .data(data)
        .enter().append("circle")
        .attr("class", d => 
              "js-" + d.x + " " +
              "js-" + utils.num2class(d.y) + " " +
              "js-" + utils.str2class(d.name)
         )
         .attr("cx", d => x(d.x) + (d.count ? cxShift(d, cfg.radius) : 0))
         .attr("cy", d => y(d.y))
         .attr("r", cfg.radius)
         .attr("fill-opacity", () => { if(cfg.opacity) return cfg.opacity; })
         .attr("fill", d => (d.c||cfg.color) ? (colors[d.c]||cfg.color) : cfg.color)
         .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
         .attr("stroke-width", 1);

         dots
         .on("mouseover", d => {
             let el_d = el.selectAll(parent + " .js-" + utils.str2class(d.name));
             el.select(parent + " .js-" + utils.num2class(d.y)).attr("stroke", "#333");
             el.select(parent + " .js-highlight text").attr("y", y(d.y)).text(d.y);
             el_d
             .attr("r", el_d.attr("r")*2)
             .style("transition", "0.25s");
         })
         .on("mouseout", d => {
             let el_d = el.selectAll(parent + " .js-" + utils.str2class(d.name));
             el.select(parent + " .js-" + utils.num2class(d.y)).attr("stroke", "#f6f6f6");
             el.select(parent + " .js-highlight text").text("");
             el_d
             .attr("r", el_d.attr("r")/2)
             .style("transition", "0s");
         });
    };

    // animation
    this.animate = (opt) => {
        if (!opt) return;
        let delay = opt.delay || 0;
        let duration = opt.duration || opt.delay || lenTime;
        let radius = (index) => opt.radius ? opt.radius[index] : cfg.radius;
        let scaleStr = opt.domain ? scale(opt.domain.str) : false;
        let scaleEnd = opt.domain ? scale(opt.domain.end) : false;

        dots
        .attr("fill-opacity", opt.opacity ? opt.opacity.str : cfg.opacity)
        .attr("r", radius("str"))
        .attr("cx", d =>(scaleStr.x ? scaleStr.x(d.x) : x(d.x)) + (d.count ? cxShift(d, radius("str")) : 0))
        .attr("cy", d => scaleStr.y ? scaleStr.y(d.y) : y(d.y))
        .transition()
        .delay((d, i) => i*delay)
        .duration(duration)
        .attr("fill-opacity", (d, i) => {
            let ruler = el.select(parent + " .line-ruler .js-" + utils.num2class(d.y));
            ruler.attr("opacity", 0);
            window.setTimeout(() => { ruler.attr("opacity", 1); }, i*delay);
            return opt.opacity ? opt.opacity.end : cfg.opacity;
        })
        .attr("r", radius("end"))
        .attr("cx", d =>(scaleEnd.x ? scaleEnd.x(d.x) : x(d.x)) + (d.count ? cxShift(d, radius("end")) : 0))
        .attr("cy", d => scaleEnd.y ? scaleEnd.y(d.y) : y(d.y));
    };

    // events
    this.events = () => {
        /*dots
          .on("mouseover", d => {
          let el_d = el.selectAll(parent + " .js-" + utils.str2class(d.name));
          el.select(parent + " .js-" + utils.num2class(d.y)).attr("stroke", "#333");
          el.select(parent + " .js-highlight text").attr("y", y(d.y)).text(d.y);
          el_d
          .attr("r", el_d.attr("r")*2)
          .style("transition", "0.25s");
          })
          .on("mouseout", d => {
          let el_d = el.selectAll(parent + " .js-" + utils.str2class(d.name));
          el.select(parent + " .js-" + utils.num2class(d.y)).attr("stroke", "#f6f6f6");
          el.select(parent + " .js-highlight text").text("");
          el_d
          .attr("r", el_d.attr("r")/2)
          .style("transition", "0s");
          });*/
    };
}
