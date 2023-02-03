// https://leetcode.com/problems/teemo-attacking/

var findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    for (let i = 1; i < timeSeries.length; i++) {
        let diff = timeSeries[i] - timeSeries[i-1];
        if (diff < duration) {
            total += diff;
        } else {
            total += duration;
        }
    }
    return total + duration;
};