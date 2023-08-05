// https://leetcode.com/problems/longest-turbulent-subarray/

// DP

var maxTurbulenceSize = function(arr) {
    let dp = Array(arr.length).fill();

    dp[0] = 1;

    let last = null;

    for (let i = 1; i < arr.length; i++) {
        if (last === '-') {
            if (arr[i] > arr[i - 1]) {
                dp[i] = dp[i - 1] + 1;
                last = '+';
            } else if (arr[i] < arr[i - 1]) {
                dp[i] = 2;
            } else {
                dp[i] = 1;
                last = null;
            }
        } else if (last === '+') {
            if (arr[i] < arr[i - 1]) {
                dp[i] = dp[i - 1] + 1;
                last = '-';
            } else if (arr[i] > arr[i - 1]) {
                dp[i] = 2;
            } else {
                dp[i] = 1;
                last = null;
            }
        } else {
            if (arr[i] > arr[i - 1]) {
                dp[i] = dp[i - 1] + 1;
                last = '+';
            } else if (arr[i] < arr[i - 1]) {
                dp[i] = dp[i - 1] + 1;
                last = '-';
            } else {
                dp[i] = 1;
            }
        }
    }

    return Math.max(...dp);
};


// Sliding Window

// var maxTurbulenceSize = function(arr) {
//     let longest = 1;
//     let left = 0;
//     let last = null;

//     for (let i = 1; i < arr.length; i++) {
//         if (!last) {
//             if (arr[i] > arr[i - 1]) {
//                 last = '+';
//                 longest = Math.max(longest, 2);
//             } else if (arr[i] < arr[i - 1]) {
//                 last = '-';
//                 longest = Math.max(longest, 2);
//             } else {
//                 left = i;
//             }
//         } else if (last === '-') {
//             if (arr[i] > arr[i - 1]) {
//                 last = '+';
//                 if (i === arr.length - 1) {
//                     longest = Math.max(longest, i - left + 1);
//                 }
//             } else if (arr[i] < arr[i - 1]) {
//                 longest = Math.max(longest, i - left);
//                 left = i - 1;
//             } else {
//                 longest = Math.max(longest, i - left);
//                 left = i;
//                 last = null;
//             }
//         } else if (last === '+') {
//             if (arr[i] > arr[i - 1]) {
//                 longest = Math.max(longest, i - left);
//                 left = i - 1;
//             } else if (arr[i] < arr[i - 1]) {
//                 last = '-';
//                 if (i === arr.length - 1) {
//                     longest = Math.max(longest, i - left + 1);
//                 }
//             } else {
//                 longest = Math.max(longest, i - left);
//                 left = i;
//                 last = null;
//             }
//         }
//     }

//     return longest;
// };