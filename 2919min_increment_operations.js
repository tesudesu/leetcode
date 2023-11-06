// https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/

var minIncrementOperations = function(nums, k) {
    let dp = Array(nums.length).fill(Infinity);
    dp[0] = Math.max(k - nums[0], 0);
    dp[1] = Math.max(k - nums[1], 0);
    dp[2] = Math.max(k - nums[2], 0);

    for (let i = 3; i < dp.length; i++) {
        dp[i] = Math.max(k - nums[i], 0) + Math.min(dp[i - 1], dp[i - 2], dp[i - 3]);
    }

    return Math.min(dp[dp.length - 1], dp[dp.length - 2], dp[dp.length - 3]);
};


// var minIncrementOperations = function(nums, k) {
//     let cache = Array(nums.length).fill().map(() => Array(3).fill(-1));

//     const dfs = (i, j) => {
//         if (i < 0) return 0;

//         if (cache[i][j] !== -1) return cache[i][j];

//         // choose the number
//         let choose = dfs(i - 1, 0) + Math.max(k - nums[i], 0);
        
//         let noChoose = Infinity;
//         // don't choose the number
//         if (j < 2) {
//             noChoose = dfs(i - 1, j + 1);
//         }

//         let res = Math.min(choose, noChoose);
//         cache[i][j] = res;
//         return res;
//     }

//     return dfs(nums.length - 1, 0);
// };