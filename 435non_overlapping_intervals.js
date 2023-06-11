// https://leetcode.com/problems/non-overlapping-intervals/

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let secondValue = intervals[0][1];

    let cleansed = [];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] !== intervals[i-1][0]) {
            cleansed.push([intervals[i-1][0], secondValue]);
            secondValue = intervals[i][1];
        } else {
            secondValue = Math.min(secondValue, intervals[i][1]);
        }
    }
    cleansed.push([intervals[intervals.length - 1][0], secondValue]);

    let remove = 0;
    let i = 1;
    let prev = cleansed[0];

    while (cleansed[i]) {
        if (prev[1] > cleansed[i][0]) {
            remove++;
            if (prev[1] > cleansed[i][1]) {
                prev = cleansed[i];
            } 
        } else {
            prev = cleansed[i];
        }
        i++;
    }

    return intervals.length - cleansed.length + remove;
};