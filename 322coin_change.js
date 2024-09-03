// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
    let coinsRequired = Array(amount+1).fill(Infinity);
    coinsRequired[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                coinsRequired[i] = Math.min(coinsRequired[i], 1 + coinsRequired[i-coin]);
            }
        }
    }
    return coinsRequired[amount] === Infinity ? -1 : coinsRequired[amount];
};


var coinChange = function(coins, amount) {
    const cache = Array(amount + 1).fill(-1);

    const dp = (tot) => {
        if (tot > amount) {
            return Infinity;
        }
        if (tot === amount) {
            return 0;
        }
        if (cache[tot] !== -1) {
            return cache[tot];
        }
        let ans = Infinity;
        for (let i = 0; i < coins.length; i++) {
            ans = Math.min(ans, dp(tot + coins[i]) + 1);
        }
        cache[tot] = ans;
        return ans;
    }

    const ans = dp(0);

    return ans === Infinity ? -1 : ans;
};