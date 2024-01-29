// https://leetcode.com/problems/longest-common-subsequence/

// Bottom-up DP

var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text2.length + 1).fill().map(() => Array(text1.length + 1).fill(0));

    for (let i = text2.length - 1; i >= 0; i--) {
        for (let j = text1.length - 1; j >= 0; j--) {
            if (text2[i] === text1[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
};


// Top-down DP

var longestCommonSubsequence = function(text1, text2) {
    const cache = Array(text2.length).fill().map(() => Array(text1.length).fill(-1));

    const dp = (i, j) => {
        if (i === text2.length || j === text1.length) {
            return 0;
        }

        if (cache[i][j] !== -1) {
            return cache[i][j];
        }

        let ans;

        if (text2[i] === text1[j]) {
            ans = 1 + dp(i + 1, j + 1);
        } else {
            ans = Math.max(dp(i + 1, j), dp(i, j + 1));
        }

        cache[i][j] = ans;

        return ans;
    }

    return dp(0, 0);
};


// var longestCommonSubsequence = function(text1, text2) {
//     let dp = Array(text1.length).fill().map(() => Array(text2.length).fill(0));
//     dp[0][0] = text1[0] === text2[0] ? 1 : 0;

//     for (let i = 1; i < dp.length; i++) {
//         if (text1[i] === text2[0]) {
//             dp[i][0] = 1;
//         } else {
//             dp[i][0] = dp[i - 1][0];
//         }
//     }

//     for (let i = 1; i < dp[0].length; i++) {
//         if (text1[0] === text2[i]) {
//             dp[0][i] = 1;
//         } else {
//             dp[0][i] = dp[0][i - 1];
//         }
//     }

//     for (let i = 1; i < dp.length; i++) {
//         for (let j = 1; j < dp[0].length; j++) {
//             if (text1[i] === text2[j]) {
//                 dp[i][j] = 1 + dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//             }
//         }
//     }

//     return dp[text1.length - 1][text2.length - 1];
// };


// var longestCommonSubsequence = function (text1, text2) {
//     let cache = {};

//     for (let i = 0; i < text1.length; i++) {
//         for (let j = 0; j < text2.length; j++) {
//             const string = `${i},${j}`;
//             if (text1[i] === text2[j]) {
//                 if (i - 1 === -1 || j - 1 === -1) {
//                     cache[string] = 1;
//                 } else {
//                     const prev = `${i - 1},${j - 1}`;
//                     cache[string] = 1 + cache[prev];
//                 }
//             } else {
//                 const prev1 = `${i},${j - 1}`;
//                 const prev2 = `${i - 1},${j}`;
//                 if (j - 1 === -1 && i - 1 === -1) {
//                     cache[string] = 0;
//                 } else if (j - 1 === -1) {
//                     cache[string] = cache[prev2];
//                 } else if (i - 1 === -1) {
//                     cache[string] = cache[prev1];
//                 } else {
//                     cache[string] = Math.max(cache[prev1], cache[prev2]);
//                 }
//             }
//         }
//     }

//     const ans = `${text1.length - 1},${text2.length - 1}`;
//     return cache[ans];
// };