// https://leetcode.com/problems/minimum-time-difference/

var findMinDifference = function(timePoints) {
    let time = Array(timePoints.length).fill();

    for (let i = 0; i < timePoints.length; i++) {
        let hours = Number(timePoints[i][0] + timePoints[i][1]);
        let minutes = Number(timePoints[i][3] + timePoints[i][4]);
        time[i] = hours * 60 + minutes;
    }

    time.sort((a, b) => a - b);

    let min = Infinity;

    for (let i = 1; i < time.length; i++) {
        let diff = Math.min(time[i] - time[i - 1]);
        min = Math.min(min, diff);
    }

    min = Math.min(min, time[0] + 24 * 60 - time[time.length - 1]);

    return min;
};