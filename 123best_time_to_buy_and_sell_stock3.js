// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

var maxProfit = function(prices) {
    const forward = Array(prices.length).fill(0);

    let max = -Infinity;
    let min = Infinity;
    let currDiff = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            max = -Infinity;
        } else if (prices[i] > max) {
            currDiff = Math.max(currDiff, prices[i] - min);
            max = prices[i];
        }
        forward[i] = currDiff;
    }

    const backwards = Array(prices.length).fill(0);

    max = -Infinity;
    min = Infinity;
    currDiff = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > max) {
            max = prices[i];
            min = Infinity;
        } else if (prices[i] < min) {
            currDiff = Math.max(currDiff, max - prices[i]);
            min = prices[i];
        }
        backwards[i] = currDiff;
    }

    let ans = 0;

    for (let i = 0; i < forward.length - 1; i++) {
        ans = Math.max(ans, forward[i] + backwards[i + 1]);
    }

    ans = Math.max(ans, forward[forward.length - 1]);

    return ans;
};


var maxProfit = function(prices) {
    const dp = Array(prices.length).fill().map(() => Array(3).fill().map(() => Array(2).fill(-Infinity)));
    dp[0][1][1] = -prices[0];
    dp[0][0][0] = 0;

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j <= 2; j++) {
            // not holding = max of continue not holding and selling
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            // holding = max of coninue holding and buying
            if (j > 0) {
                dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            }
        }
    }

    let ans = 0;

    for (let i = 0; i <= 2; i++) {
        ans = Math.max(ans, dp[prices.length - 1][i][0]);
    }
    
    return ans;
};