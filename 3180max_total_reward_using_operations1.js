// https://leetcode.com/problems/maximum-total-reward-using-operations-i/

var maxTotalReward = function(rewardValues) {
    rewardValues = new Set(rewardValues);
    rewardValues = [...rewardValues];
    rewardValues.sort((a, b) => a - b);

    const cache = Array(rewardValues.length).fill().map(() => Array(4000).fill(-1));

    const dp = (i, sum) => {
        if (i >= rewardValues.length) {
            return sum;
        }

        if (cache[i][sum] !== -1) {
            return cache[i][sum];
        }

        let pick = -Infinity;
        if (sum < rewardValues[i]) {
            pick = dp(i + 1, sum + rewardValues[i]);
        }

        let dontPick = dp(i + 1, sum);

        cache[i][sum] = Math.max(pick, dontPick);

        return cache[i][sum];
    }

    return dp(0, 0);
};


var maxTotalReward = function(rewardValues) {
    rewardValues = new Set(rewardValues);
    rewardValues = [...rewardValues];
    rewardValues.sort((a, b) => a - b);

    const dp = Array(rewardValues.length + 1).fill().map(() => Array(4000).fill(false));
    dp[0][0] = true;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < 4000; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j - rewardValues[i - 1] < rewardValues[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - rewardValues[i - 1]];
            }
        }
    }

    for (let i = 3999; i >= 0; i--) {
        if (dp[rewardValues.length][i]) {
            return i;
        }
    }
};


var maxTotalReward = function(rewardValues) {
    rewardValues.sort((a, b) => a - b);

    let candidates = new Set();
    candidates.add(rewardValues[0]);

    for (let i = 1; i < rewardValues.length; i++) {
        let newCandidates = new Set();
        for (const candidate of candidates) {
            if (rewardValues[i] > candidate) {
                newCandidates.add(rewardValues[i] + candidate);
            }
            newCandidates.add(candidate);
            newCandidates.add(rewardValues[i]);
        }
        candidates = newCandidates;
    }

    return Math.max(...candidates);
};