import {range as d3_range} from 'd3-array';
import {extent as d3_extent} from 'd3-array';
import {select as d3_select} from 'd3-selection';
import {axisBottom as d3_axisBottom} from 'd3-axis';
import {sync} from "../variables";

/* param: coord - x or y */
/* param: direction - h or v, isJump? */
export default function(cfg) {
    let axis, line, text;
    let coord = cfg.coord;

    let getSteps = (scale) => {
        switch (true) {
        //TODO: steps case 
        case cfg.value === "year": 
            let min = scale.domain[coord][0];
            let max = scale.domain[coord][1];
            let range = min===max ? [min] : d3_range(max, min, -4);
            
            return range;//[range.length-1] === min ? range : range.concat([min]);
        case cfg.value === "mark":
            //TODO: remove axisBottom later? 
            let d3_axis = d3_axisBottom(scale[coord]).ticks(8);
            return d3_axis.scale().ticks(d3_axis.ticks()[0]).reverse();
        }
    };

    this.init = (data, scale) => {
        axis = d3_select(".axis-" + coord)
        .attr("class", "axis-" +  cfg.value);
    };

    this.update = (opt, scale) => {
        let steps = getSteps(scale);
        
        let divHide;
        let axisSize = document.querySelector(".js-chart").getBoundingClientRect();
        switch(coord) {
            case "x": divHide = Math.ceil(24*steps.length/(axisSize.width - 30)); break;
            case "y": divHide = Math.ceil(12*steps.length/(axisSize.height - 30)); break;
        }
        //console.log(coord, steps.length, divHide);

        line = axis.selectAll("line").data(steps);
        text = axis.selectAll("text").data(steps);
        
        // exit
        line.exit().remove();
        text.exit().remove();
        
        // enter
        //window.setTimeout(() => {
        
        line.enter()
        .append("line")
        .attr("opacity", 0)
        .transition().duration(opt.duration*1000)
        .attr("opacity", 1)
        .attr("x1", d => 0)
        .attr("x2", d => "95.5%")
        .attr("y1", d => 0)
        .attr("y2", d => "99%")
        .attr(coord+"1", d => scale[coord](d) + "%")
        .attr(coord+"2", d => scale[coord](d) + "%");
        
        text.enter()
        .append("text")
        .transition().duration(opt.duration*1000)
        .attr("x", d => "101%")
        .attr("y", d => "100%")
        .attr("dy", coord === "x" ? ".71em" : ".3em")
        .attr(coord, d => scale[coord](d) + "%")
        .attr("opacity", (d, i) => i%divHide === 0 ? 1 : 0)
        .text(d => Math.round(Math.abs(d)*100)/100);

        //}, (opt.duration-1)*1000);
         
        // update
        line
        .transition().duration(opt.duration*1000)
        .attr(coord+"1", d => scale[coord](d) + "%")
        .attr(coord+"2", d => scale[coord](d) + "%");
        
        text
        .transition().duration(opt.duration*1000)
        .attr("dy", coord === "x" ? ".71em" : ".3em")
        .attr(coord, d => scale[coord](d) + "%")
        .attr("opacity", (d, i) => i%divHide === 0 ? 1 : 0)
        .text(d => Math.round(Math.abs(d)*100)/100);
    };
}
