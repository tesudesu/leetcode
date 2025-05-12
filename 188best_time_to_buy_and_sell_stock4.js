// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/

var maxProfit = function(k, prices) {
    const dp = Array(prices.length).fill().map(() => Array(k + 1).fill().map(() => Array(2).fill(-Infinity)));
    dp[0][1][1] = -prices[0];
    dp[0][0][0] = 0;

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j <= k; j++) {
            for (let k = 0; k <= 1; k++) {
                if (k === 0) {
                    // not holding = max of continue not holding and selling
                    dp[i][j][k] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
                } else {
                    // holding = max of coninue holding and buying
                    if (j > 0) {
                        dp[i][j][k] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
                    }
                }
                
            }
        }
    }

    let ans = 0;

    for (let i = 0; i <= k; i++) {
        ans = Math.max(ans, dp[prices.length - 1][i][0]);
    }
    
    return ans;
};


var maxProfit = function(k, prices) {
    const cache = Array(prices.length).fill().map(() => Array(k + 1).fill().map(() => Array(2).fill(-1)));

    const dp = (i, j, holding) => {
        if (i < 0) {
            return holding ? -Infinity : 0;
        }
        if (j < 0) {
            return -Infinity;
        }

        if (cache[i][j][holding] !== -1) {
            return cache[i][j][holding];
        }

        let ans;

        if (!holding) {
            ans = Math.max(dp(i - 1, j, 0), dp(i - 1, j - 1, 1) + prices[i]);
        } else {
            ans = Math.max(dp(i - 1, j, 1), dp(i - 1, j, 0) - prices[i]);
        }

        cache[i][j][holding] = ans;

        return ans;
    }

    return dp(prices.length - 1, k, 0);
};