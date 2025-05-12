// https://leetcode.com/problems/shortest-way-to-form-string/

var shortestWay = function(source, target) {
    let sourceSet = new Set(source);

    for (let i = 0; i < target.length; i++) {
        if (!sourceSet.has(target[i])) {
            return -1;
        }
    }

    let tot = 0;

    let i = 0;
    let j = 0;

    while (i < target.length) {
        while (j < source.length) {
            if (target[i] === source[j]) {
                j++;
                i++;
            } else {
                j++;
            }
        }
        tot++;
        j = 0;
    }

    return tot;
};