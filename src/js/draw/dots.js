import {select as d3_select} from 'd3-selection';
import {transition} from 'd3-transition';

import utils from '../lib/utils';
import {colors, sync} from '../variables';
import updateInfo from './info';

export default function(cfg) {

    // TODO: depends on h or v direction
    // TODO: recalc r, temp 1%
    let dots;
    let cxShift = (d, r) => r*((d.index-1)*2 - (d.count-1))*0.75;
    let cyShift = (d, r) => 1*((d.index-1)*2 - (d.count-1))*0.75;
    cfg.cx = (d, r, x) => x(d.x);// + (d.count ? cxShift(d, cfg.radius) : 0);
    cfg.cy = (d, r, y) => y(d.y) + (d.count ? cyShift(d, r) : 0);
    
    let tempColor = (d) => {
        return (colors[d.color]||cfg.color) ? (colors[d.color]||cfg.color) : colors.others;
    };
    
    this.init = (data, scale) => {
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
        .attr("fill", d => tempColor(d))
        .attr("stroke-opacity", () => cfg.opacity ? cfg.opacity : 0)
        .attr("stroke", () => { if(cfg.stroke) return cfg.stroke; })
        .attr("stroke-width", 1)
        // interaction
        .on("mouseover", d => { showHighlight(d); })
        .on("mouseout",  d => { hideHighlight(d); });
        
        cfg.best = {};
        cfg.best = data[data.length - 1];
    };

    // update
    this.update = (opt, scale, opacity) => {
        //if (cfg.dataset==="final") console.log(opt.delay, "(pause)");
        
        dots.transition()
        .duration(opt.duration*1000)
        .attr("fill-opacity", opacity)
        .attr("stroke-opacity", opacity)
        .attr("cx", d => cfg.cx(d, cfg.radius, scale.x) + "%")
        .attr("cy", d => cfg.cy(d, cfg.radius, scale.y) + "%");
        
        // disable events on transition
        let elParent = d3_select(".dots-" + cfg.dataset);
        elParent.style("pointer-events", "none");
        
        dots.each(d => d.o = opacity); // opacity for highlight
        
        window.setTimeout(() => {
            //if (cfg.dataset==="final") console.log(opt.delay+opt.duration, "(restart)");
            elParent.style("pointer-events", opacity === 0 ? "none" : "all");
            
            let state = document.querySelector(".js-chart").getAttribute("data-state");
            if (state === cfg.dataset) { showHighlight(cfg.best); }
        }, (opt.duration) * 1000); 
       
        window.setTimeout(() => {
            hideHighlight(cfg.best);
        }, (opt.duration + 3) * 1000); 
   
    };
}

// interaction
function showHighlight(d1) {
    let attrs = d1.attrs;
    let x = sync.scale.x(d1.x);
    let y = sync.scale.y(d1.y);

    // name
    let elsAll = d3_select(".js-chart").selectAll("circle")
    .style("transition", "0.25s")
    .attr("fill-opacity", d => d.o/2);

    let elsName = elsAll
    .filter(d2 => d2.attrs.name === attrs.name)
    .attr("fill-opacity", d => d.o === 0 ? 0 : 1)
    .attr("r", d => d.r*2);

    let d1Records = elsName._groups[0].map(el => el.__data__);
    updateInfo(d1, d1Records);

    // hightlight 
    d3_select(".js-highlight-h").style("opacity", 1)
    .attr("y1", y + "%").attr("y2", y + "%") 
    .attr("x1", x + "%");
}

function hideHighlight(d1) {
    let attrs = d1.attrs;

    // name
    let elsAll = d3_select(".js-chart").selectAll("circle")
    .style("transition", "0s")
    .attr("fill-opacity", d => d.o);
    elsAll.filter(d2 => d2.attrs.name === attrs.name)
    .attr("r", d => d.r);

    // highlight
    d3_select(".js-highlight-h").style("opacity", 0);
}
