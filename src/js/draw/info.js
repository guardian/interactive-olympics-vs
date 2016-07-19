import {select as d3_select} from 'd3-selection';

const headlines = {
    final: "2016 Olympic final result",
    medal: "Olympic medalists",
    world: "World record progression",
    mixed: "All results"
};

const cfg= {
    "long-jump_m": { unit: "m", event: "male's high jump" },
    "breaststroke-100_m": { unit: "s", event: "male's breaststroke 100m" }
};

export default function(data, records) {
    //console.log(data);
    if (!records) {

        cleanFields();
        d3_select(".js-headline").text(headlines[data]);
        
    } else {

        let cFinal = records.filter(dr => isNumeric(dr.color)).length; 
        let cWorld = records.filter(dr => dr.color === "wr").length;
        let cMedal = records.length - cFinal - cWorld; 
        let cAll = cMedal + cWorld;

        let attrs = data.attrs;
        let event = window.location.search.replace("?", ""); 
        d3_select(".js-headline").text(attrs.name);
        d3_select(".js-team").text(attrs.team);
        d3_select(".js-count").text(cAll!==0 ? "1 " + data.color + " out of " + cAll : "rank " + data.color + " in 2016 fianl");
        d3_select(".js-medal").text(cMedal!==0 ? ", "+cMedal+" olympic medals" : "");
        d3_select(".js-wr").text(cWorld!==0 ? ", "+cWorld+" world records" : "");
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
    let keys = ["team", "count", "medal", "wr", "standfirst"];
    keys.forEach(key => d3_select(".js-" + key).text(""));
}
