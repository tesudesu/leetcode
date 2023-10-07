// https://leetcode.com/problems/longest-valid-parentheses/

// Stack

var longestValidParentheses = function(s) {
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")") {
            start = i + 1;
        } else {
            break;
        }
    }

    if (start >= s.length) return 0;

    let invalid = [];

    for (let i = start; i < s.length; i++) {
        if (s[i] === ")" && s[invalid[invalid.length - 1]] === "(") {
            invalid.pop();
        } else {
            invalid.push(i);
        }
    }

    if (invalid.length === 0) return s.length - start;

    let max = invalid[0] - start;

    for (let i = 1; i < invalid.length; i++) {
        max = Math.max(max, invalid[i] - invalid[i - 1] - 1);
    }

    max = Math.max(max, s.length - invalid[invalid.length - 1] - 1);

    return max;
};


// DP

// var longestValidParentheses = function(s) {
//     if (s.length === 0) return 0;

//     let dp = Array(s.length).fill(0);

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ")") {
//             if (s[i - 1] === "(") {
//                 dp[i] = (dp[i - 2] || 0) + 2;
//             } else if (s[i - 1 - dp[i - 1]] === "(") {
//                 dp[i] = dp[i - 1] + 2 + (dp[i - 2 - dp[i - 1]] || 0);
//             }
//         }
//     }

//     return Math.max(...dp);
// };


// O(1) space

// var longestValidParentheses = function(s) {
//     let openBrackets = 0;
//     let closeBrackets = 0;
//     let max = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             openBrackets++;
//         } else {
//             closeBrackets++;
//         }
//         if (closeBrackets > openBrackets) {
//             openBrackets = 0;
//             closeBrackets = 0;
//         } else if (openBrackets === closeBrackets) {
//             max = Math.max(max, openBrackets * 2);
//         }
//     }

//     if (openBrackets > closeBrackets) {
//         openBrackets = 0;
//         closeBrackets = 0;
//         for (let i = s.length - 1; i >= 0; i--) {
//             if (s[i] === ")") {
//                 openBrackets++;
//             } else {
//                 closeBrackets++;
//             }
//             if (closeBrackets > openBrackets) {
//                 openBrackets = 0;
//                 closeBrackets = 0;
//             } else if (openBrackets === closeBrackets) {
//                 max = Math.max(max, openBrackets * 2);
//             }
//         }
//     }

//     return max;
// };