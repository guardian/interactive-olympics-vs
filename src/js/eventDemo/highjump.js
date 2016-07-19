import array from '../lib/array';
import Plot from '../chart/plot';
import {select as d3_select} from 'd3-selection';
import {extent as d3_extent} from 'd3-array';

export default function(id, data) {
    console.log(data);

    let plot;
    let domain, tempDomain, maxX, maxY, last;
    let dataCombo, divide, diff;

    let elPlot = d3_select("#" + id);
    
    /* 1. olympic finals */
    last = data.finals.length - 1;
    maxX = data.finals[0].x; // min = max
    last = data.worlds.length - 1;
    maxY = data.worlds[last-1].y;
    domain = {
        x: [maxX-1, maxX+1], //hotfix
        y: [0, maxY]
    };

    // === plot 1 ===
    plot = new Plot(elPlot, {
        classname: "hj-finals-f-1", 
        domain: domain
    }); 
    plot.ruler(data.record);
    plot.marks(data.record);  
    plot.axis({x: [maxX]});   
    // === end of plot 1 ===
    
    // === plot 2 ===
    plot = new Plot(elPlot, {
        classname: "hj-finals-f-2", 
        domain: domain
    }); 
    plot.ruler(data.finals.concat(data.record));
    plot.marks(data.record);
    plot.axis({x: [maxX]});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 2,
        opacity: 0.75,
    }, {
        // animation
        radius: { str: 6, end: 2 },
        opacity: { str: 0, end: 0.75 },
        delay: 250
    });
    // === end of plot 2 ===
    
    dataCombo = data.finals.concat(data.record); 
    domain.y = d3_extent(dataCombo, d => d.y);
    
    // === plot 3 ===
    plot = new Plot(elPlot, {
        classname: "hj-finals-f-3", 
        domain: domain
    }, {
        // animation
        domain: {
            str: {y: [0, domain.y[1]]},
            end: {y: domain.y}
        }, 
        duration: 1000
    }); 
    plot.ruler(dataCombo);
    plot.marks(data.record);
    plot.axis({x: [maxX]});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 6,
        opacity: 1
    }, {
        // animation
        radius: { str: 2, end: 6 }
    });   
    // === end of plot 3 ===

    /* 2. olympic medalists */
    dataCombo = data.finals.concat(data.medals); 
    tempDomain = domain;
    domain = {
        x: d3_extent(dataCombo, d => d.x),
        y: d3_extent(dataCombo, d => d.y)
    };

    // === plot 4 ===
    plot = new Plot(elPlot, {
        classname: "hj-medals-f-1", 
        domain: domain
    }, {
        // animation
        domain: {
            str: tempDomain,
            end: domain
        },   
        duration: 1000
    }); 
    plot.ruler(data.finals.concat([data.record[0]]));
    plot.marks([data.record[0]]);
    plot.axis({x: [maxX]});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 3,
        opacity: 1
    }, {
        // animation
        radius: { str: 6, end: 3 }
    });   
    // === end of plot 4 ===
    
    // === plot 5 ===
    plot = new Plot(elPlot, {
        classname: "hj-medals-f-2", 
        domain: domain
    }); 
    plot.ruler(dataCombo);
    plot.marks([data.record[0]]);
    plot.axis({x: domain.x.concat([maxX])});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 3,
        opacity: 1
    });
    data.medals.sort((d1, d2) => d2.x - d1.x);
    plot.dots(data.medals, {
        classname: "dots-medal",
        radius: 3,
        opacity: 0.75
    }, {
        // animation
        opacity: { str: 0, end: 0.75 },
        delay: 1000 / data.medals.length,
    });
    // === end of plot 5 ===
 
    /* 3. world records */
    dataCombo = data.finals.concat(data.worlds); 
    domain = {
        x: d3_extent(dataCombo, d => d.x),
        y: d3_extent(dataCombo, d => d.y)
    };
    
    // === plot 6 ===
    plot = new Plot(elPlot, {
        classname: "hj-worlds-f-1", 
        domain: domain
    }); 
    plot.ruler(dataCombo);
    plot.marks([data.record[1]]);
    plot.axis({x: d3_extent(data.worlds, d => d.x).concat([maxX])});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 3,
        opacity: 1
    });
    plot.dots(data.worlds, {
        classname: "dots-world",
        color: "#666",
        radius: 2,
        opacity: 1,
    }, {
        // animation
        opacity: { str: 0, end: 0.75 },
        delay: 1000 / data.medals.length,
    });
    // === end of plot 6 ===
    
    /* 4. all with tech changes */
    divide = [1912, 1936, 1968];
    domain.x[0] = divide[0]; 
    
    // === plot 7 ===
    plot = new Plot(elPlot, {
        classname: "hj-tech-f-1", 
        domain: domain
    }); 
    plot.ruler(dataCombo);
    plot.marks(data.record);
    plot.rects({domain: domain, divide: divide}, {}, {
        //animation
        width: { str: 0 },
        delay: 250
    });
    plot.axis({x: divide.concat([maxX])});   
    plot.dots(dataCombo, {
        classname: "dots-world",
        radius: 2,
        opacity: 0.75,
        color: "#666"
    });
    // === end of plot 7 ===
    
    /* 5. all */
    dataCombo = data.finals.concat(data.worlds, data.medals); 
    domain = {
        x: d3_extent(dataCombo, d => d.x),
        y: d3_extent(dataCombo, d => d.y)
    };
    diff = (domain.x[1] - domain.x[0]) / 2;
    domain.x[1] += diff; 
    
    // === plot 8 ===
    plot = new Plot(elPlot, {
        classname: "hj-all-f-1", 
        domain: domain
    }); 
    plot.ruler(dataCombo); 
    plot.marks(data.record);
    plot.axis({x: d3_extent(data.worlds, d => d.x).concat([maxX])});   
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 3,
        opacity: 1
    });
    plot.dots(data.medals, {
        classname: "dots-medal",
        radius: 3,
        opacity: 0.75
    });
    plot.dots(data.worlds, {
        classname: "dots-world",
        radius: 2,
        opacity: 1,
        color: "#666"
    });
    // === end of plot 8 ===    

    /* animation test * /
    // === plot 9 ===
    last = data.finals.length - 1;
    maxX = data.finals[0].x; // min = max
    last = data.worlds.length - 1;
    maxY = data.worlds[last-1].y;
    domain = {
        x: [maxX-1, maxX+1], //hotfix
        y: [0, maxY]
    };

    plot = new Plot(elPlot, {
        classname: "hj-f-animation", 
        domain: domain
    }); 
    plot.axis({x: [maxX]});   
    plot.marks(data.record);  
    // stage 1: add final
    plot.ruler(data.record.concat(data.finals));
    plot.dots(data.finals, {
        classname: "dots-final",
        radius: 2,
        opacity: 0.75,
    }, {
        radius: { str: 6, end: 2 },
        opacity: { str: 0, end: 0.75 },
        delay: 250
    });
    plot.dots(data.finals, {}, {
        duration: w0,
        domain: {
            str: {y: domain}
        }
    });
    */ 
    // step 2
    //dataCombo = data.finals.concat(data.record); 
    //domain.y = d3_extent(dataCombo, d => d.y);
 

    // === end of plot 9 ===
}
