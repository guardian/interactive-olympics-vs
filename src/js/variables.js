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
