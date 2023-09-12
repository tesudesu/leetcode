// https://leetcode.com/problems/frog-jump/

var canCross = function(stones) {
    if (stones[1] !== 1) return false;

    let dp = Array(stones.length).fill().map(() => Array(0));
    dp[1] = [1];

    for (let i = 1; i < stones.length - 1; i++) {
        for (let j = i + 1; j < stones.length; j++) {
            const diff = stones[j] - stones[i];
            for (let k = 0; k < dp[i].length; k++) {
                if (dp[i][k] === diff || dp[i][k] - 1 === diff || dp[i][k] + 1 === diff) {
                    dp[j].push(diff);
                    break;
                }
            }
        }
    }

    return dp[dp.length - 1].length !== 0;
};