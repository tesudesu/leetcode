// https://leetcode.com/problems/insert-interval/

var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }
    
    let ans = [];

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][1]) {
            ans.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            ans.push(newInterval);
            for (let j = i; j < intervals.length; j++) {
                ans.push(intervals[j]);
            }
            return ans;
        } else {
            ans.push([Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])]);
            for (let j = i + 1; j < intervals.length; j++) {
                if (intervals[j][0] <= ans[ans.length - 1][1] && intervals[j][1] > ans[ans.length - 1][1]) {
                    ans[ans.length - 1][1] = intervals[j][1];
                    continue;
                }
                if (intervals[j][0] > ans[ans.length - 1][1]) {
                    ans.push(intervals[j]);
                }
            }
            return ans;
        }
    }

    ans.push(newInterval);

    return ans;
};