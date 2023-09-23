// https://leetcode.com/problems/count-pairs-of-points-with-distance-k/

var countPairs = function(coordinates, k) {
    let tot = 0;

    let map = new Map();

    for (let i = 0; i < coordinates.length; i++) {
        const str = `${coordinates[i][0]},${coordinates[i][1]}`;
        map.set(str, (map.get(str) + 1) || 1);
    }

    for (let i = 0; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];
        for (let j = 0; j <= k; j++) {
            if (k - j < 0) break;
            const x2 = x ^ j;
            const y2 = y ^ (k - j);
            const str = `${x2},${y2}`;
            if (map.has(str)) {
                tot += (x === x2 && y === y2) ? map.get(str) - 1: map.get(str);
            }
        }
    }

    return tot / 2;
};