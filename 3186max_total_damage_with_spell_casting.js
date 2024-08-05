// https://leetcode.com/problems/maximum-total-damage-with-spell-casting/

var maximumTotalDamage = function(power) {
    const counts = new Map();
    for (const num of power) {
        counts.set(num, (counts.get(num) + 1) || 1);
    }

    let keys = [...counts.keys()];
    keys.sort((a, b) => a - b);

    const cache = Array(keys.length).fill(-1);

    const dfs = (i) => {
        if (i === keys.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let dontTake = dfs(i + 1);
        
        let j = i;
         
        while (j < keys.length && keys[j] <= keys[i] + 2) {
            j++;
        }

        let take = dfs(j) + keys[i] * counts.get(keys[i]);

        cache[i] = Math.max(take, dontTake);

        return cache[i];
    }

    return dfs(0);
};


var maximumTotalDamage = function(power) {
    const counts = new Map();
    for (const num of power) {
        counts.set(num, (counts.get(num) + 1) || 1);
    }

    let keys = [...counts.keys()];
    keys.sort((a, b) => a - b);
    
    const dp = Array(keys.length).fill(0);
    dp[0] = keys[0] * counts.get(keys[0]);

    for (let i = 1; i < keys.length; i++) {
        let dontTake = dp[i - 1];
        let take = keys[i] * counts.get(keys[i]);
        let j = i - 1;
        while (j >= 0 && keys[j] >= keys[i] - 2) {
            j--;
        }
        if (j >= 0) {
            take += dp[j];
        }
        dp[i] = Math.max(dontTake, take);
    }

    return dp[dp.length - 1];
};