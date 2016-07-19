import {chart} from '../variables';
import scale from './scale';

export default function(data, cfg, el, svg, x, y) {
    let dataCloneL = (data.slice(0)).map(d => {return {x:2, y:d.y};});
    let dataCloneR = (data.slice(0)).map(d => {return {x:chart.w-10, y:d.y};});

    let marks, lines, texts;
    this.draw = () => { 
        marks = svg.select(".line-marks");
        lines = marks.selectAll("line")
        .data(dataCloneL.concat(dataCloneR))
        .enter().append("line")
        .attr("x1", d => d.x)
        .attr("x2", d => d.x + 8)
        .attr("y1", d => y(d.y))
        .attr("y2", d => y(d.y))
        .attr("stroke", "grey")
        .attr("stroke-width", 1)
        .attr("pointer-events", "none");
        texts = marks.selectAll("text")
        .data(data)
        .enter().append("text")  
        .attr("x", 15)
        .attr("y", (d, i) => y(d.y))
        .attr("fill", "grey")
        .attr("fill-opacity", 1)
        .attr("pointer-events", "none")
        .text(d => d.y + "(" + d.text + ")");
    };

   this.animate = (opt) => {
        if (!opt) return;
        // domain
        let yStr = scale(opt.domain.str).y;
        let yEnd = scale(opt.domain.end).y;
        lines
        .attr("y1", d => yStr(d.y))
        .attr("y2", d => yStr(d.y))
        .transition()
        .duration(opt.duration)
        .attr("y1", d => yEnd(d.y))
        .attr("y2", d => yEnd(d.y));
        texts
        .attr("y", d => yStr(d.y))
        .transition()
        .duration(opt.duration)
        .attr("y", d => yEnd(d.y)); 
   };
}
