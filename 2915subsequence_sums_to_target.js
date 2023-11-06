// https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/

var lengthOfLongestSubsequence = function(nums, target) {
    let dp = Array(nums.length).fill().map(() => Array(target + 1).fill(-Infinity));
    
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 0;
    }

    if (nums[0] <= target) {
        dp[0][nums[0]] = 1;
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            // not pick
            dp[i][j] = dp[i - 1][j];

            // pick
            if (nums[i] <= j) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - nums[i]] + 1);
            }
        }
    }

    return dp[dp.length - 1][target] > 0 ? dp[dp.length - 1][target] : -1;
};


// var lengthOfLongestSubsequence = function(nums, target) {
//     let cache = Array(nums.length).fill().map(() => Array(target + 1).fill());
    
//     const dp = (i, targ) => {
//         if (targ === 0) return 0;
//         if (targ < 0 || i >= nums.length) return -Infinity;

//         if (cache[i][targ]) return cache[i][targ];

//         let pick = -Infinity;

//         if (nums[i] <= targ) {
//             pick = dp(i + 1, targ - nums[i]) + 1;
//         }

//         let notPick = dp(i + 1, targ);

//         let ans = Math.max(pick, notPick);
//         cache[i][targ] = ans;
//         return ans;
//     }

//     let res = dp(0, target);

//     return res > 0 ? res : -1;
// };