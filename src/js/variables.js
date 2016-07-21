import utils from './lib/utils';

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
    others: "#E0E0E0"
};

// sync state, scale, domain, ... ?
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

export const defaultHeaderTexts = { 
    headline: {
        "final": "2016 Olympic final result",
        "medal": "Olympic medalists",
        "world": "World record progression",
        "mixed": "All results"
    },
    standfirst: {
        "final": "",
        "medal": "",
        "world": "",
        "mixed": "Interactive with this chart to explore more details ..."
    }
};
