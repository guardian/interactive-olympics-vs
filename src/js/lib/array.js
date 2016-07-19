exports.sort = (arr) => {
    return arr.sort((d1, d2) => d1 - d2); 
};

exports.unique = (arr) => {
    return arr.filter((d, i) => arr.indexOf(d) === i); 
};
exports.uniqueBy = (key, objArr) => {
    return objArr.map(obj => obj[key])
    .filter((dd, i, arr) => i === arr.indexOf(dd));
};

exports.merge = (arrs) => {
    return [].concat.apply([], arrs);
};

/* object array */
let obj2arr = (obj) =>
    Object.keys(obj).map(key => obj[key]);

// param: returnObj - (boolean) return obj or arr by default
// return arr by default
exports.groupBy = (keys, objArr, returnObj) => {
    let groupObj = {};
    objArr.forEach(obj => {
        let kk = keys.map(key => obj[key]).join("_");
        groupObj[kk] = groupObj[kk] || [];
        groupObj[kk].push(obj);
    });
    let list = returnObj ? groupObj : obj2arr(groupObj);
    return list;
};

