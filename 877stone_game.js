// https://leetcode.com/problems/stone-game/

var stoneGame = function (piles) {
    let dp = Array(piles.length).fill(0).map(() => Array(piles.length).fill(0));

    for (let i = piles.length - 1; i >= 0; i--) {
        for (let j = i; j < piles.length; j++) {
            if (i === j) {
                dp[i][j] = -piles[i];
                continue;
            }
            if ((j - i + 1) % 2 === 0) {
                dp[i][j] = Math.max(piles[i] + dp[i + 1][j], piles[j] + dp[i][j - 1]);
            } else {
                dp[i][j] = Math.min(-piles[i] + dp[i + 1][j], -piles[j] + dp[i][j - 1]);
            }
        }
    }

    return dp[0][piles.length - 1] > 0;
};


// var stoneGame = function (piles) {
//     return true;
// };