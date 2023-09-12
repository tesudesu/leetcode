// https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/

var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let min = Math.max(Math.abs(fx - sx), Math.abs(fy - sy));

    if (min === 0) return t !== 1;

    return t >= min;
};