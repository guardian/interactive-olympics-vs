import iframeMessenger from 'guardian/iframe-messenger';
import embedHTML from './text/embed.html!text';
import chartHTML from './text/chart.html!text';

import getData from './events/data';

// team
import team_pursuit_m from '../dataDummy/team-pursuit_m.json!json';
import freestyle100x4_relay_w from '../js/events/freestyle100x4_relay_w';

// individuals
import freestyle200_m from '../js/events/freestyle200_m';
import breaststroke100_m from '../js/events/breaststroke100_m';
import medley400_m from '../js/events/medley400_m';
import medley400_w from '../js/events/medley400_w';
import longjump_m from '../js/events/longjump_m';

import utils from './lib/utils';
import throttle from './lib/throttle';
import {select as d3_select} from 'd3-selection';

window.init = function init(el, config) {
    iframeMessenger.enableAutoResize();

    let event = window.location.search.replace("?", "");
    if (!event) { 
        el.innerHTML = embedHTML;
        //demo(); 
        return; 
    }

    let data;
    el.innerHTML = chartHTML;
    window.addEventListener("resize", throttle(setGraphSize, 500));
    setGraphSize();

    switch (event) {
        case "team-pursuit_m": 
            data = getData(team_pursuit_m, "T");
        break;
        case "medley-400_w": 
            medley400_w();
        break;       
        case "medley-400_m": 
            medley400_m();
        break;       
        case "freestyle-100x4_relay_w": 
            freestyle100x4_relay_w();
        break;
        case "freestyle-200_m": 
            freestyle200_m();
        break;
        case "breaststroke-100_m": 
            breaststroke100_m();
        break;
        case "long-jump_m": 
            longjump_m();
        break;
        default:
            console.log("This event is not special!");
    }
    //console.log(event);
    //console.log(data); 
};

function setGraphSize() {
    let size = utils.getWindowSize();
    let height = Math.round(size.w*0.6);
    
    d3_select(".graph")
    .style("height", height + "px")
    .style("max-height", size.w > 1024 ? size.h - 200 + "px" : null)
    .style("min-height", size.w > 1024 ? "360px" : null);
    //.style("width", size.w + "px")
    //console.log(size.w, height);
}
