// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

var maxProfit = function(prices, fee) {
    let free = Array(prices.length);
    let hold = Array(prices.length);

    free[0] = 0;
    hold[0] = -prices[0];

    for (let i = 1; i < prices.length; i++) {
        free[i] = Math.max(free[i-1], hold[i-1] + prices[i] - fee);
        hold[i] = Math.max(hold[i-1], free[i-1] - prices[i]);
    }

    return Math.max(free[prices.length - 1], hold[prices.length - 1]);
};