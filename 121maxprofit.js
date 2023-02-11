// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let smallest = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < smallest) {
            smallest = prices[i];
        }
        if (prices[i] > prices[i-1]) {
            let diff = prices[i] - smallest;
            if (diff > max) {
                max = diff;
            }
        }
    }
    return max;
};