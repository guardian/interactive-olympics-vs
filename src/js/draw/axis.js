import {select as d3_select} from 'd3-selection';
import {extent as d3_extent} from 'd3-array';
import {axisBottom as d3_axisBottom} from 'd3-axis';

/* param: coord - x or y */
/* param: direction - h or v, isJump? */
export default function(cfg) {
    let axis, dataAxis;
    let coord = cfg.coord;

    this.init = (data, scale, steps) => {

        dataAxis = d3_axisBottom(scale[coord]);
        if (steps) { dataAxis.tickValues(steps); }
        dataAxis.tickFormat(d => Math.round(Math.abs(d)*100)/100);

        axis = d3_select(".axis-" + coord)
        .attr("class", "axis-" +  cfg.value)
        .call(dataAxis);

        axis.selectAll("line")
        .attr("x1", d => 0)
        .attr("x2", d => "97%")
        .attr("y1", d => 0)
        .attr("y2", d => "99%")
        .attr(coord+"1", d => scale[coord](d) + "%")
        .attr(coord+"2", d => scale[coord](d) + "%");

        axis.selectAll("text")
        .attr("dy", coord === "x" ? ".71em" : ".3em")
        .attr("x", d => "100%")
        .attr("y", d => "100%")
        .attr(coord, d => scale[coord](d) + "%");

        axis.select(".domain")
        .style("display", "none");
        axis.selectAll(".tick")
        .attr("transform", "");

        if (coord === "y" && cfg.value === "year") {
        axis.append("rect")
        .attr("x", 0)        
        .attr("y", "100%")        
        .attr("fill", "white") 
        .style("width", "calc(100%  + 25px)")        
        .style("height", "25px");        
        }   
    };

    this.update = (opt, scale) => {
        /*if (cfg.value === "mark") {
        dataAxis = d3_axisBottom(scale[coord])
        .tickFormat(d => Math.abs(d));
        axis.call(dataAxis);
        }*/

        let duration = opt.duration !== undefined ? opt.duration : 1;

        axis.selectAll("line")
        .transition()
        .delay(opt.delay || 0)
        .duration((opt.duration || 2) * 1000)
        //.delay(opt.delay*1000)
        //.duration(duration*1000)
        .attr(coord+"1", d => scale[coord](d) + "%")
        .attr(coord+"2", d => scale[coord](d) + "%");
        
        axis.selectAll("text")
        .transition()
        .delay(opt.delay || 0)
        .duration((opt.duration || 2) * 1000)
        //.delay(opt.delay*1000)
        //.duration(duration*1000)
        .attr("dy", coord === "x" ? ".71em" : ".3em")
        .attr(coord, d => scale[coord](d) + "%");
        
        //axis
        //.duration(1000)
        //.call(dataAxis);
    };
}
