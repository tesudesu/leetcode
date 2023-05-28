// https://leetcode.com/problems/buy-two-chocolates/

var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    const min = prices[0] + prices[1];
    return min <= money ? money - min : money;
};