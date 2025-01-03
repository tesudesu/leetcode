// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

var finalPrices = function(prices) {
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
            let prev = stack.pop();
            prices[prev] -= prices[i];
        }
        stack.push(i);
    }

    return prices;
};