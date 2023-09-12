// https://leetcode.com/problems/extra-characters-in-a-string/

var minExtraChar = function(s, dictionary) {
    let dp = Array(s.length + 1).fill(0);

    const set = new Set(dictionary);

    for (let i = 0; i < s.length; i++) {
        dp[i + 1] = dp[i] + 1; 

        for (let j = i; j >= 0; j--) {
            if (set.has(s.slice(j, i + 1))) {
                dp[i + 1] = Math.min(dp[j], dp[i + 1]);
            }
        }
    }

    return dp[dp.length - 1];
};