import utils from './lib/utils';
import {json as d3_json} from 'd3-request';

const minWidth = 320;
const padding = 20;

// window
let size = utils.getWindowSize();
let cols = Math.floor(size.w/minWidth);

// chart
let width = (cols > 0 ? Math.round(size.w/cols) : minWidth) - padding*2-1;
let height = Math.round(width * 0.62) - padding*2;

export let chart = {
    w: width,
    h: height,
    padding: padding
};

// colors
export const colors = {
    gold:   "#fbdc00", 
    silver: "#C0C0C0", 
    bronze: "#CD7F32", 
    others: "#E0E0E0",
    wr: "#333"
};

// sync scale, domain, ... ?
export let sync = {
    s: {x: null, y:null},
    d: {x: null, y:null},
    set scale(s) { 
        this.s.x = s.x;
        this.s.y = s.y;
        this.d.x = s.domain.x;
        this.d.y = s.domain.y;
        //console.log("year:", this.d.y, "mark:", this.d.x);
    },
    get scale() { return this.s; },
    get domain() { return this.d; }
};

// header
export let stateHeaders = {
    list: ["final", "medal", "mixed"],
    data: [{
        state: "final", 
        title: "2012 Olympic finals", 
        description: "It was a WR, OR - how much better. Silver or bronze did better than gold last Olympic, or gold was worst than prior Olympics. Lorem ipsum dolor sit amet, ... "}, 
    { 
        state: "medal", 
        title: "Olympic medalist since ...",
        description: "It was a WR, OR - how much better. Silver or bronze did better than gold last Olympic, or gold was worst than prior Olympics. Aenean commodo ligula eget dolor."}, 
    {
        state: "mixed",
        title: "All results",
        description: "Interactive with this chart to discover more details ..."
    }]
};

export function setStateHeaders(type) {
    let key = "1Qx2_oITx9455H4C_Kv8X4rPYtwnY_KwE-vxPe1cFx4M";
    let url = "http://interactive.guim.co.uk/docsdata-test/" + key + ".json";
    d3_json(url, (err, resp) => {
        if (err) {
            console.error(err);
        } else if (resp.embed_vs){
            // TODO: use type to get keys
            stateHeaders.data = resp.embed_vs;
            stateHeaders.list = resp.embed_vs.map(d => d.state);
        } else {
            console.error("content is not available!");
        }
    });
}
