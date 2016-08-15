import utils from './lib/utils';
import {json as d3_json} from 'd3-request';

const minWidth = 320;
const padding = 20;

// window
let size = utils.getWindowSize();
let cols = Math.floor(size.w/minWidth);
let isFirefox = typeof InstallTrigger !== 'undefined';

// browser type
export let browser = isFirefox ? "ff" : null;

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
    others: "#aad8f1", //blue
    runner: "#8EBE6F", //green
    wr:     "#333"
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
    dataObj: null,
    objList: null,
    set data(dataObj) { 
        this.dataObj = dataObj; 
        this.objList = dataObj.map(d => d.state);
    },
    get data() { return this.dataObj; },
    get list() { return this.objList; }     
};

export let record = {
    dataWr: null,
    dataOr: null,
    typeMark: null,
    
    set wr(data) { this.dataWr = data; },
    set or(data) { this.dataOr = data; },
    get wr() { return this.dataWr; },
    get or() { return this.dataOr; },
    
    set type(data) { 
        this.typeMark = data === "Time" ? "s" : "m"; 
    },
    get type() { return this.typeMark; }
    
};
