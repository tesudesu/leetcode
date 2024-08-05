// https://leetcode.com/problems/count-ways-to-build-good-strings/

var countGoodStrings = function(low, high, zero, one) {
    const mod = 1e9 + 7;
    const cache = new Map();

    const dp = (length) => {
        if (length > high) {
            return 0;
        }
        if (cache.has(length)) {
            return cache.get(length);
        }

        let ans = (dp(length + zero) + dp(length + one)) % mod;

        if (length >= low) {
            ans = (ans + 1) % mod;
        }

        cache.set(length, ans);
        return ans;
    }

    return dp(0);
};


var countGoodStrings = function(low, high, zero, one) {
    const mod = 1e9 + 7;
    const dp = Array(high + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= high; i++) {
        if (i - zero >= 0) {
            dp[i] = dp[i - zero];
        }
        if (i - one >= 0) {
            dp[i] += dp[i - one];
        }
        dp[i] %= mod;
    }

    let tot = 0;
    for (let i = low; i <= high; i++) {
        tot = (tot + dp[i]) % mod;
    }

    return tot;
};