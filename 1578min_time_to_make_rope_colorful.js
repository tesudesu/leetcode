// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

var minCost = function(colors, neededTime) {
    let i = 1;
    let ans = 0;

    while (i < colors.length) {
        let max = -Infinity;
        let tot = 0;
        while (colors[i] === colors[i - 1]) {
            max = Math.max(max, neededTime[i - 1]);
            tot += neededTime[i - 1]
            i++;
        }
        if (tot !== 0) {
            tot += neededTime[i - 1];
            max = Math.max(max, neededTime[i - 1]);
            ans += tot - max;
        }
        i++;
    }

    return ans;
};