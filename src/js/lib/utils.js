exports.getWindowSize = function() {
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var w = window.innerWidth || e.clientWidth || g.clientWidth;
    var h = window.innerHeight|| e.clientHeight|| g.clientHeight;
    return {w: w, h: h};
};

exports.num2class = function(num) {
    return num.toString().replace(".", "_");
};
exports.str2class = function(str) {
    return str.replace(/\s/g, "_");
};
exports.nlist2arr = function(nodelist) {
    return Array.prototype.slice.call(nodelist);
};
