import array from '../lib/array';

export default function (data, cfg, el, svg, scale) {
    let list = array.sort(data.divide.concat(data.domain.x));
    list[0] -= scale.domainShiftX;
    list[list.length-1] += scale.domainShiftX;

    let dataRect = list.map((d, i, arr) => { return {
        x: scale.x(d),
        y: 0,
        w: scale.x(arr[i+1]) - scale.x(d),
        h: scale.y(data.domain.y[0]-scale.domainShiftY)
    };}); 
    dataRect = dataRect.slice(0, -1);
    dataRect[0].x += 3;
    dataRect[0].w -= 3;
    dataRect[dataRect.length -1].w -= 3;

    let rect;
    this.draw = () => {
        rect = svg.append("g")
        .attr("class", "rect-techs")
        .selectAll("rect")
        .data(dataRect)
        .enter().append("rect")
        .attr("fill", "#4bcbdf")
        .attr("fill-opacity", (d, i) => 0.2+0.1*i)
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        //.attr("width", d => d.w)
        .attr("height", d => d.h);
    };

    this.animate = (opt) => {
        //console.log(opt);
        rect 
        .attr("width", d => opt.width.str)
        .transition()
        .delay((d, i) => i*opt.delay || 0)
        .duration(opt.duration || opt.delay)
        .attr("width", d => d.w);
    };
}
