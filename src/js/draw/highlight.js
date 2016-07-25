export default function () {
    let pos = document.querySelector("#" + cfg.best.id).getBoundingClientRect();

    d3_select(".highlight").style("opacity", 1); 
    d3_select(".dots-animate")
    .style("width", (cfg.best.r*4-1) + "px")
    .style("height", (cfg.best.r*4-1) + "px")
    .style("top", (pos.top - cfg.best.r) + "px")
    .style("left", (pos.left - cfg.best.r) + "px");
}
