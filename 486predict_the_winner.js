// https://leetcode.com/problems/predict-the-winner/

var PredictTheWinner = function(nums) {
    if (nums.length % 2 === 0) return true;

    let dp = Array(nums.length).fill(0).map(() => Array(nums.length).fill(0));

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (i === j) {
                dp[i][j] = nums[i];
                continue;
            }
            if ((j - i + 1) % 2 !== 0) {
                dp[i][j] = Math.max(nums[i] + dp[i + 1][j], nums[j] + dp[i][j - 1]);
            } else {
                dp[i][j] = Math.min(-nums[i] + dp[i + 1][j], -nums[j] + dp[i][j - 1]);
            }
        }
    }

    return dp[0][nums.length - 1] >= 0;
};


// var PredictTheWinner = function(nums) {
//     if (nums.length % 2 === 0) return true;

//     let dp = Array(nums.length).fill(0).map(() => Array(nums.length).fill(0));

//     for (let i = nums.length - 1; i >= 0; i--) {
//         for (let j = i; j < nums.length; j++) {
//             if (i === j) {
//                 dp[i][j] = nums[i];
//                 continue;
//             }
//             dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
//         }
//     }

//     return dp[0][nums.length - 1] >= 0;
// };