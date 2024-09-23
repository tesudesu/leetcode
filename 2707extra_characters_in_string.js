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


var minExtraChar = function(s, dictionary) {
    const set = new Set(dictionary);

    const cache = Array(s.length).fill(-1);
    
    const dfs = (i) => {
        if (i === s.length) {
            return 0;
        }
        if (cache[i] !== -1) {
            return cache[i];
        }
        let min = Infinity;
        for (let j = i; j < s.length; j++) {
            const str = s.slice(i, j + 1);
            if (set.has(str)) {
                min = Math.min(min, dfs(j + 1));
            } else {
                min = Math.min(min, j - i + 1 + dfs(j + 1));
            }
        }
        cache[i] = min;
        return min;
    }

    return dfs(0);
};