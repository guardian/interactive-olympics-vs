exports.getWindowSize = () => {
    let d = document;
    let e = d.documentElement;
    let g = d.getElementsByTagName('body')[0];
    let w = window.innerWidth || e.clientWidth || g.clientWidth;
    let h = window.innerHeight|| e.clientHeight|| g.clientHeight;
    return {w: w, h: h};
};

exports.num2class = (num) => {
    return num.toString().replace(".", "_");
};
exports.str2class = (str) => {
    return str.replace(/\s/g, "_");
};
exports.nlist2arr = (nodelist) => {
    return Array.prototype.slice.call(nodelist);
};
