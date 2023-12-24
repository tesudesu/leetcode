// https://leetcode.com/problems/destination-city/description/

var destCity = function(paths) {
    let hasOutgoing = new Set();

    for (let i = 0; i < paths.length; i++) {
        hasOutgoing.add(paths[i][0]);
    }

    for (let i = 0; i < paths.length; i++) {
        if (!hasOutgoing.has(paths[i][1])) {
            return paths[i][1];
        }
    }
};