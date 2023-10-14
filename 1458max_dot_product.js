// https://leetcode.com/problems/max-dot-product-of-two-subsequences/

// Bottom up DP

var maxDotProduct = function(nums1, nums2) {
    let dp = Array(nums2.length).fill().map(() => Array(nums1.length).fill(0));
    dp[0][0] = nums1[0] * nums2[0];

    let max = -Infinity;

    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], nums1[0] * nums2[i]);
        max = Math.max(max, dp[i][0]);
    }

    for (let i = 1; i < dp[0].length; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], nums1[i] * nums2[0]);
        max = Math.max(max, dp[0][i]);
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = Math.max(nums1[j] * nums2[i], (nums1[j] * nums2[i]) + dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            max = Math.max(max, dp[i][j]);
        }
    }

    return max;
};


// Top down DP

// var maxDotProduct = function(nums1, nums2) {
//     let cache = Array(nums2.length).fill().map(() => Array(nums1.length).fill(-Infinity));
//     cache[0][0] = nums1[0] * nums2[0];

//     const dp = (x, y) => {
//         if (x < 0 || y < 0) {
//             return -Infinity;
//         }
//         if (cache[x][y] !== -Infinity) {
//             return cache[x][y];
//         }
//         const ans = Math.max(nums2[x] * nums1[y], (nums2[x] * nums1[y]) + dp(x - 1, y - 1), dp(x - 1, y), dp(x, y - 1), dp(x - 1, y - 1));
//         cache[x][y] = ans;
//         return ans;
//     }

//     return dp(nums2.length - 1, nums1.length - 1);
// };