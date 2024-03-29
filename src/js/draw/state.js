import {stateHeaders} from '../variables';
import {select as d3_select} from 'd3-selection';
import calcScale from '../draw/scale';
import updateInfo from '../draw/info';
import {updatePicker} from '../draw/dotPicker';

export function getNextState(stateName) {
    let list = stateHeaders.list;
    let currIndex = list.indexOf(stateName);
    let nextIndex = (currIndex + 1) % list.length;
    return {
        index: nextIndex,
        name: list[nextIndex]
    };
}

export function toState(els, data, stateName) {
    d3_select(".js-chart").attr("data-state", stateName);
    
    let scale = calcScale(data.domain);
    Object.keys(els).forEach((key, i) => {
        els[key].update(data, scale, data.opacity[i]); 
    }); 

    d3_select(".states").selectAll(".btn").classed("btn-focus", false); 
    d3_select(".btn-" + stateName).classed("btn-focus", true);

    d3_select(".tooltip").selectAll(".count").classed("count-focus", false);
    d3_select(".count-" + stateName).classed("count-focus", true);
    
    let headers = stateHeaders.data;
    let currInd = stateHeaders.list.indexOf(stateName);
    let nextInd = getNextState(stateName).index;
    let isReplay = nextInd === 0;
    let isCircle = headers.length > 2; // switch if only two states

    // btn current
    d3_select(".js-state-name").text(headers[currInd].title);
    d3_select(".js-state-text").text(headers[currInd].description);
    // btn next
    d3_select(".js-state-next").text(isReplay && isCircle ? "Replay" : "" + headers[nextInd].title);
    d3_select(".replay").style("opacity", isReplay ? 1 : 0); 
    d3_select(".arrow-right").style("opacity", isReplay ? 0 : 1); 
    d3_select(".btn-next").classed("enable", false);
    // dot picker as an event handler
    d3_select(".dots-picker").classed("enable", false);
    
    // update info
    updateInfo(stateName);
    updatePicker(scale);
}
