// https://leetcode.com/problems/best-sightseeing-pair/

var maxScoreSightseeingPair = function(values) {
    let maxBefore = values[0] - 1;
    let maxPair = 0;

    for (let i = 1; i < values.length; i++) {
        maxPair = Math.max(maxPair, maxBefore + values[i]);
        maxBefore = Math.max(maxBefore - 1, values[i] - 1);
    }

    return maxPair;
};