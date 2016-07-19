import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import scale from './scale';
import utils from '../lib/utils';
import array from '../lib/array';
import {chart} from '../variables';

export default function(data, cfg, el, svg, x, y, parent) {
    data = data.map((d) => d.y);
    data = array.unique(data);
    data = array.sort(data);

    //console.log(data);
    let len = data.length - 1;
    let dataRuler = data.map((d, i, arr) => {
        let pre = i!==len ? arr[i+1] : arr[i-1];
        let avg = (d + pre) / 2;
        return {
            val: d,
            yRect: y(avg),
            height: (y(d) - y(avg)) * 1.5
        };
    });
    dataRuler[len].yRect = y(dataRuler[len].val);
    dataRuler[len].height = Math.abs(dataRuler[len].height)*2/3;


    // ruler
    let ruler, lines;
    this.draw = () => { 
        ruler = svg//.insert("g", ":first-child")
        .select(".line-ruler")
        .selectAll(".line")
        .data(dataRuler)
        .enter();

    // ruler high
        lines = ruler.append("line")
        .attr("class", d => "js-" + utils.num2class(d.val))
        .attr("x1", 0-8)
        .attr("x2", chart.w+8)
        .attr("y1", d => y(d.val))
        .attr("y2", d => y(d.val))
        .attr("stroke", "#f6f6f6")
        .attr("stroke-width", 1)
        .attr("opacity", cfg ? cfg.opacity : 1);
    };
    
    this.animate = (opt) => {
        if (!opt) return;
        // domain
        let yStr = scale(opt.domain.str).y;
        let yEnd = scale(opt.domain.end).y;
        lines
        .attr("y1", d => yStr(d.val))
        .attr("y2", d => yStr(d.val))
        .transition()
        .duration(opt.duration)
        .attr("y1", d => yEnd(d.val))
        .attr("y2", d => yEnd(d.val));
    };

    // ruler events
    this.events = () => {
        ruler.append("rect")
        .attr("x", 0)
        .attr("y", d => d.yRect)
        .attr("width", chart.w)
        .attr("height", d => d.height)
        .attr("fill", "transparent")
        .style("cursor", "pointer")
        .on("mouseover", d => {
            let el_t = document.querySelector(parent + " .js-highlight text");
            let el_h = document.querySelector(parent + " .js-" + utils.num2class(d.val));
            let elsc = utils.nlist2arr(document.querySelectorAll(/*parent +*/" .js-" + utils.num2class(d.val)));
            el_h.style.stroke = "#333";
            el_h.style.transition = "stroke 0s";
            el_t.setAttribute("y", y(d.val));
            el_t.textContent = d.val;
            elsc.forEach(d => { d.setAttribute("r", d.getAttribute("r")*2); });
        })
        .on("mouseout", d => {
            let el_t = document.querySelector(parent + " .js-highlight text");
            let el_h = document.querySelector(parent + " .js-" + utils.num2class(d.val));
            let elsc = utils.nlist2arr(document.querySelectorAll(/*parent +*/" .js-" + utils.num2class(d.val)));
            el_h.style.stroke = "#f6f6f6";
            el_h.style.transition = "stroke 0.5s";
            el_t.setAttribute("y", defaultY);
            elsc.forEach(d => { d.setAttribute("r", d.getAttribute("r")/2); });       
        });

        // interactive
        let defaultY = -100; 
        let highlight = svg.append("g")
        .attr("class", "js-highlight");
        highlight.append("text")
        .attr("x", 15)
        .attr("y", defaultY)
        .attr("fill", "#333")
        .text(defaultY);
    };
}
