// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

var maxProfit = function(prices) {
    let hold = Array(prices.length);
    let free = Array(prices.length);

    hold[0] = -prices[0];
    free[0] = 0;
    hold[1] = Math.max(hold[0], free[0] - prices[1]);
    free[1] = Math.max(free[0], hold[0] + prices[1]);

    for (let i = 2; i < prices.length; i++) {
        hold[i] = Math.max(hold[i-1], free[i-2] - prices[i]);
        free[i] = Math.max(free[i-1], hold[i-1] + prices[i]);
    }

    return free[prices.length - 1];
};