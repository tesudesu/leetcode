// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
    let coinsRequired = Array(amount+1).fill(Infinity);
    console.log(coinsRequired)
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