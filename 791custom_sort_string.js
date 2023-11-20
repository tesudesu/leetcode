// https://leetcode.com/problems/custom-sort-string/

var customSortString = function(order, s) {
    const indices = {};

    for (let i = 0; i < order.length; i++) {
        indices[order[i]] = i;
    }

    let sArr = [];
    let excess = "";

    for (let i = 0; i < s.length; i++) {
        if (indices.hasOwnProperty(s[i])) {
            sArr.push(s[i]);
        } else {
            excess += s[i];
        }
    }

    sArr.sort((a, b) => {
        if (!indices.hasOwnProperty(a) || !indices.hasOwnProperty(b)) {
            return -1;
        }
        if (indices[a] <= indices[b]) {
            return -1;
        } else {
            return 1;
        }
    });

    return sArr.join("") + excess;
};