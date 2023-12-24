// https://leetcode.com/problems/minimum-number-of-coins-for-fruits/

var minimumCoins = function(prices) {
    let cache = Array(prices.length + 1).fill().map(() => Array(prices.length).fill(-1));

    const dp = (index, free) => {
        if (index >= prices.length) {
            return 0;
        }

        if (cache[free][index] !== -1) {
            return cache[free][index];
        }

        // pay current
        let pay = prices[index] + dp(index + 1, index + 1);
        let dontpay = Infinity;

        if (free > 0) {
            dontpay = dp(index + 1, free - 1);
        }

        let ans = Math.min(pay, dontpay);
        cache[free][index] = ans;

        return ans;
    }

    return dp(0, 0);
};