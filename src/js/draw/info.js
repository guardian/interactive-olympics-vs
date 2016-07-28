import {select as d3_select} from 'd3-selection';
import {defaultHeaderTexts} from '../variables';

const cfg = {
    "long-jump_m": { unit: "m", event: "men's high jump" },
    "freestyle-200_m": { unit: "s", event: "men's freestyle 200m" },
    "freestyle-100x4_relay_w": { unit: "s", event: "women's freestyle 4x100m" },
    "breaststroke-100_m": { unit: "s", event: "men's breaststroke 100m" },
    "medley-400_m": { unit: "s", event: "men's medley 400m" },
    "medley-400_w": { unit: "s", event: "womens's medley 400m" }
};

export default function(data, records) {
    //console.log(data);
    if (!records) {

        cleanFields();
        //d3_select(".js-headline").text(defaultHeaderTexts.headline[data]);
        //d3_select(".js-standfirst").text(defaultHeaderTexts.standfirst[data]);
         
    } else {
        // TODO: double check calc
        let cFinal = records.filter(dr => isNumeric(dr.color)).length; 
        let cWorld = records.filter(dr => dr.color === "wr").length;
        let cMedal = records.length - cFinal - cWorld; 
        let cAll = cMedal + cWorld;

        let attrs = data.attrs;
        let event = window.location.search.replace("?", ""); 
        d3_select(".js-headline").text(attrs.name);
        d3_select(".js-team").text(attrs.team);
        d3_select(".js-final").text(cAll!==0 ? "1 " + data.color + " out of " + cAll : "rank " + data.color + " in 2016 fianl");
        d3_select(".js-medal").text(cMedal!==0 ? ", "+cMedal+" olympic medals" : "");
        d3_select(".js-world").text(cWorld!==0 ? ", "+cWorld+" world records" : "");
        d3_select(".js-standfirst").text(
            "In " + attrs.year + " " + cfg[event].event + " event, " +
            attrs.name.split(" ")[0] + " marked " + attrs.mark + cfg[event].unit + " which " + 
            (attrs.dist !== 0 ? "could be " + attrs.dist + "m behind " : "is ") +
            "current world record."
        );

    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function cleanFields() {
    let keys = ["headline", "team", "final", "medal", "world", "standfirst"];
    keys.forEach(key => d3_select(".js-" + key).text(""));
}
