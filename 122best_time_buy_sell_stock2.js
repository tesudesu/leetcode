// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let tot = 0;
    let start = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > start) {
            tot += prices[i] - start;
            start = prices[i];
        } else if (prices[i] < start) {
            start = prices[i];
        }
    }

    return tot;
};