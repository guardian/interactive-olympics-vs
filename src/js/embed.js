import iframeMessenger from 'guardian/iframe-messenger';
import embedHTML from './text/embed.html!text';
import chartHTML from './text/chart.html!text';

import demo from './eventDemo/result';
import getData from './events/data';

import long_jump_m from '../dataDummy/long-jump_m.json!json';
import team_pursuit_m from '../dataDummy/team-pursuit_m.json!json';
import freestyle200_m from '../dataDummy/freestyle200_m.json!json';
import breaststroke200_m from '../dataDummy/breaststroke200_m.json!json';

import breaststroke100_m from '../js/events/breaststroke100_m';
import longjump_m from '../js/events/longjump_m';

import utils from './lib/utils';
import throttle from './lib/throttle';
import {select as d3_select} from 'd3-selection';


window.init = function init(el, config) {
    let event = window.location.search.replace("?", "");
    iframeMessenger.enableAutoResize();

    if (!event) { 
        el.innerHTML = embedHTML;
        demo(); 
        return; 
    }

    let data;
    el.innerHTML = chartHTML;
    window.addEventListener("resize", throttle(setInteractiveSize, 500));
    setInteractiveSize();

    switch (event) {
        case "team-pursuit_m": 
            data = getData(team_pursuit_m, "T");
        break;
        case "freestyle200_m": 
            data = getData(freestyle200_m, "T");
        break;
        case "breaststroke-200_m": 
            data = getData(breaststroke200_m, "T");
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

function setInteractiveSize() {
    let size = utils.getWindowSize();
    let height = Math.round(size.w*0.6);
    
    d3_select(".js-interactive")
    .style("height", height + "px");
    //.style("width", size.w + "px")
    //console.log(size.w, height);
}
