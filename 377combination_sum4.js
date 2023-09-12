// https://leetcode.com/problems/combination-sum-iv/

var combinationSum4 = function(nums, target) {
    let dp = Array(target + 1);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        let tot = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) {
                tot += dp[i - nums[j]];
            }
        }
        dp[i] = tot;
    }

    return dp[target];
};


// var combinationSum4 = function(nums, target) {
//     let tot = 0;

//     const backtrack = (sum) => {
//         if (sum === target) {
//             tot++;
//             return;
//         }
//         if (sum > target) {
//             return;
//         }

//         for (let i = 0; i < nums.length; i++) {
//             backtrack(sum + nums[i]);
//         }
//     }

//     backtrack(0);

//     return tot;
// };