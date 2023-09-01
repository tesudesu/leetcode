// https://leetcode.com/problems/maximize-the-profit-as-the-salesman/

var maximizeTheProfit = function(n, offers) {
    offers.sort((a, b) => a[1] - b[1]);

    let dp = Array(n).fill(0);

    let j = 0;

    for (let i = 0; i < n; i++) {
        if (j >= offers.length) {
            dp[i] = dp[i - 1];
            continue;
        }
        while (j < offers.length) {
            if (offers[j][1] <= i) {
                let prev = 0;
                if (offers[j][0] - 1 >= 0) {
                    prev = dp[offers[j][0] - 1];
                }
                dp[i] = Math.max(dp[i], offers[j][2] + prev);
                j++;
            } else {
                break;
            }
        }
        dp[i] = Math.max(dp[i], dp[i - 1] || 0);
    }

    return dp[dp.length - 1];
};