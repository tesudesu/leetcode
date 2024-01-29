// https://leetcode.com/problems/k-inverse-pairs-array/

// Top-down DP

var kInversePairs = function(n, k) {
    if (n === 1) {
        if (k === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    const cache = Array(n + 1).fill().map(() => Array(k + 1).fill());
    for (let i = 0; i < cache[0].length; i++) {
        cache[1][i] = 1;
    }

    const mod = 1e9 + 7;

    const dp = (size, pairs) => {
        if (pairs === 0) {
            return 1;
        } 

        if (size === 0) {
            return 0;
        }

        if (cache[size][pairs] !== undefined) {
            return cache[size][pairs];
        }

        const upper = dp(size - 1, pairs);
        const lower = pairs - size < 0 ? 0 : dp(size - 1, pairs - size);

        cache[size][pairs] = (dp(size, pairs - 1) + (upper + mod - lower) % mod) % mod; 

        return cache[size][pairs];
    }

    return (dp(n - 1, k) + mod - (k - n < 0 ? 0 : dp(n - 1, k - n))) % mod;
};


// Bottom-up DP

var kInversePairs = function (n, k) {
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(1));
    const mod = 1e9 + 7;

    for (let i = 2; i < n; i++) {
        for (let j = 0; j <= k; j++) {
            dp[i][j] = ((j - 1 >= 0 ? dp[i][j - 1] : 0) + dp[i - 1][j] + mod - (j - i >= 0 ? dp[i - 1][j - i] : 0)) % mod;
        }
    }

    return (dp[n - 1][k] + mod - (k - n < 0 ? 0 : dp[n - 1][k - n])) % mod;
};