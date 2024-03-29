import iframeMessenger from 'guardian/iframe-messenger';
import embedHTML from './text/chart.html!text';

import utils from './lib/utils';
import throttle from './lib/throttle';
import {updateDotAnimation} from './draw/highlight';
import {updateInfoPosition} from './draw/info';

import swimming from '../js/events/swimming';
import cycling from '../js/events/cycling';
import longjump_m from '../js/events/longjump_m';

window.init = function init(el, config) {
    iframeMessenger.enableAutoResize();
    
    // get event type
    let event = window.location.search.replace("?", "");
    if (!event) { 
        console.error("param is required!");
        return; 
    }
    
    // set embed size
    el.innerHTML = embedHTML;
    el.setAttribute("data-event", event);
    window.addEventListener("resize", throttle(setEmbedSize, 500));
    setEmbedSize();
    
    // load chart    
    let data;
    switch (event) {
       
        // realtime final data
        case "freestyle_100x4_relay_w": 
        case "freestyle_400_w": 
        case "freestyle_200_m": 
        case "run_100_m": 
        case "run_200_w": 
        case "run_200_m": 
        case "run_100x4_relay_m": 
            swimming(event);
            break;
        
        // testing
        case "breaststroke_100_m": 
        case "medley_400_w": 
        case "medley_400_m": 
            swimming(event, "Test");
            break;       
        case "cycling_road_timetrial_w": 
            cycling(event, "Test");
            break;
        //case "longjump_m": 
        //    longjump_m(event, "Test"); 
        //    break;
        
        default:
            console.log("This event is not special!");
    }
};

let page = { w: 0, mode: "small"};
function setEmbedSize() {
    let size = utils.getWindowSize();
    if (size.w === page.w) return;
    
    // page width change
    let elEmbed = document.querySelector(".graph");
    let height = Math.round(size.w*0.6);
    elEmbed.style.height = height + "px";

    updateDotAnimation();
    updateInfoPosition();

    // header position change
    let event = document.querySelector(".js-interactive").getAttribute("data-event");
    //console.log(event);
    switch (true) {
    // exception(s) due to layout
    case (event === "run_200_m"): break;
    case (size.w < 980 && page.w >= 980): swapeChildNodes("in", "top"); break;
    case (page.w < 980 && size.w >= 980): swapeChildNodes("top", "in"); break;
    default: /*console.log("no change");*/ }
    
    page.w = size.w;
}

function swapeChildNodes(pre, cur) {
    //console.log(pre, "->", cur);
    let nodeCurParent = document.querySelector("." + cur);
    let nodePreParent = document.querySelector("." + pre);
    
    // copy from pre parent
    let nodeToBeSwapped = nodePreParent.children;

    // remove from pre add to new parent
    utils.nlist2arr(nodeToBeSwapped).forEach(node => {
        nodePreParent.removeChild(node);
        nodeCurParent.appendChild(node);
    });
} 
