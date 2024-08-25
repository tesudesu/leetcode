// https://leetcode.com/problems/maximum-number-of-points-with-cost/

var maxPoints = function(points) {
    const n = points.length;
    const m = points[0].length;
    let dp = Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        dp[i] = points[0][i];
    }

    for (let i = 1; i < n; i++) {
        const leftToRight = Array(m).fill();
        const rightToLeft = Array(m).fill();

        leftToRight[0] = dp[0];
        rightToLeft[m - 1] = dp[m - 1];

        for (let j = 1; j < m; j++) {
            leftToRight[j] = Math.max(dp[j], leftToRight[j - 1] - 1);
        }

        for (let j = m - 2; j >= 0; j--) {
            rightToLeft[j] = Math.max(dp[j], rightToLeft[j + 1] - 1);
        }

        for (let j = 0; j < m; j++) {
            dp[j] = points[i][j] + Math.max(leftToRight[j], rightToLeft[j]);
        }
    }

    return Math.max(...dp);
};