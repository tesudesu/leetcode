// https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [];
    let curr = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= curr[1]) {
            if (intervals[i][1] <= curr[1]) {
                continue;
            } else {
                curr = [curr[0], intervals[i][1]];
            }
        } else {
            ans.push(curr);
            curr = intervals[i];
        }
    }

    ans.push(curr);

    return ans;
};