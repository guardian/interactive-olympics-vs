exports.sort = function(arr) {
    return arr.sort(function(d1, d2) { 
        return d1 - d2;
    }); 
};

exports.unique = function(arr) {
    return arr.filter(function(d, i) {
        return arr.indexOf(d) === i;
    }); 
};
exports.uniqueBy = function(key, objArr) {
    return objArr
        .map(function(obj) {return obj[key];})
        .filter(function(dd, i, arr) {return i === arr.indexOf(dd); });
};

exports.merge = function (arrs) {
    return [].concat.apply([], arrs);
};

/* object array */
var obj2arr = function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
};

// param: returnObj - (boolean) return obj or arr by default
// return arr by default
exports.groupBy = function(keys, objArr, returnObj) {
    var groupObj = {};
    objArr.forEach(function(obj) {
        var kk = keys.map(function(key) {return obj[key];}).join("_");
        groupObj[kk] = groupObj[kk] || [];
        groupObj[kk].push(obj);
    });
    var list = returnObj ? groupObj : obj2arr(groupObj);
    return list;
};
