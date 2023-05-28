// https://leetcode.com/problems/group-by/

Array.prototype.groupBy = function(fn) {
    let res = {};

    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if (res.hasOwnProperty(key)) {
            res[key].push(this[i]);
        } else {
            res[key] = [];
            res[key].push(this[i]);
        }
    }

    return res;
};