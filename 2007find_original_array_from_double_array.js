// https://leetcode.com/problems/find-original-array-from-doubled-array/

var findOriginalArray = function(changed) {
    if (changed.length % 2 !== 0) return [];

    const map = new Map();

    for (let i = 0; i < changed.length; i++) {
        map.set(changed[i], (map.get(changed[i]) + 1) || 1);
    }

    let ans = [];

    changed.sort((a, b) => a - b);

    for (let i = 0; i < changed.length; i++) {
        if (map.get(changed[i]) > 0) {
            map.set(changed[i], map.get(changed[i]) - 1);
            ans.push(changed[i]);
            let double = changed[i] * 2;
            if (map.has(double) && map.get(double) > 0) {
                map.set(double, map.get(double) - 1);
            } else {
                return [];
            }
        }
    }

    return ans;
};