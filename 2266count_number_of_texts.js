// https://leetcode.com/problems/count-number-of-texts/

var countTexts = function(pressedKeys) {
    const cache = Array(pressedKeys.length).fill(-1);
    const mod = 1e9 + 7;

    const dp = (i) => {
        if (i >= pressedKeys.length - 1) {
            return 1;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let ans = dp(i + 1);

        if (pressedKeys[i] === "7") {
            if (pressedKeys[i + 1] === "7") {
                ans += dp(i + 2);
                if (pressedKeys[i + 2] === "7") {
                    ans += dp(i + 3);
                    if (pressedKeys[i + 3] === "7") {
                        ans += dp(i + 4);
                    }
                }
            }
        } else if (pressedKeys[i] === "9") {
            if (pressedKeys[i + 1] === "9") {
                ans += dp(i + 2);
                if (pressedKeys[i + 2] === "9") {
                    ans += dp(i + 3);
                    if (pressedKeys[i + 3] === "9") {
                        ans += dp(i + 4);
                    }
                }
            }
        } else {
            if (pressedKeys[i + 1] === pressedKeys[i]) {
                ans += dp(i + 2);
                if (pressedKeys[i + 2] === pressedKeys[i]) {
                    ans += dp(i + 3);
                }
            }
        }

        ans %= mod;
        cache[i] = ans;

        return ans;
    }

    return dp(0);
};


var countTexts = function(pressedKeys) {
    const dp = Array(pressedKeys.length).fill(0);
    dp[0] = 1;
    const mod = 1e9 + 7;

    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i - 1];
        if (pressedKeys[i - 1] === pressedKeys[i]) {
            dp[i] += dp[i - 2] || 1;
            if (pressedKeys[i - 2] === pressedKeys[i]) {
                dp[i] += dp[i - 3] || 1;
                if (pressedKeys[i - 3] === pressedKeys[i] && (pressedKeys[i] === "7" || pressedKeys[i] === "9")) {
                    dp[i] += dp[i - 4] || 1;
                }
            }
        }
        dp[i] %= mod;
    }

    return dp[dp.length - 1];
};