// https://leetcode.com/problems/coin-change-ii/

// Top-down DP

var change = function(amount, coins) {
    let cache = Array(coins.length).fill().map(() => Array(amount + 1).fill(-1));

    const dp = (index, sum) => {
        if (sum === amount) {
            return 1;
        }
        if (sum > amount || index >= coins.length) {
            return 0;
        }

        if (cache[index][sum] !== -1) {
            return cache[index][sum];
        }

        const take = dp(index, sum + coins[index]);
        const noTake = dp(index + 1, sum);

        cache[index][sum] = take + noTake;
        return cache[index][sum];
    }

    return dp(0, 0);
};


// Bottom-up DP

var change = function(amount, coins) {
    let dp = Array(coins.length).fill().map(() => Array(amount + 1).fill(0));

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }

    for (let i = 0; i < dp[0].length; i++) {
        if (coins[0] <= i) {
            dp[0][i] = dp[0][i - coins[0]];
        }
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if (coins[i] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
            }
        }
    }

    return dp[coins.length - 1][amount];
};