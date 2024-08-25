// https://leetcode.com/problems/maximum-distance-in-arrays/

var maxDistance = function(arrays) {
    let min = Math.min(...arrays[0]);
    let max = Math.max(...arrays[0]);
    let dist = 0;

    for (let i = 1; i < arrays.length; i++) {
        const currMin = Math.min(...arrays[i]);
        const currMax = Math.max(...arrays[i]);
        const newDist1 = Math.abs(currMax - min);
        const newDist2 = Math.abs(currMin - max);
        if (newDist1 > dist) {
            dist = newDist1;
        }
        if (newDist2 > dist) {
            dist = newDist2;
        }
        min = Math.min(min, currMin);
        max = Math.max(max, currMax);
    }

    return dist;
};