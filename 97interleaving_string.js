// https://leetcode.com/problems/interleaving-string/

var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    
    let ans = false;

    const search = (p1, p2, p3) => {
        if (p3 < 0 && p1 < 0 && p2 < 0) {
            ans = true;
            return;
        }

        if (ans) return;

        if (p1 < 0 && p2 < 0) return false;

        if (p1 < 0 && s2[p2] !== s3[p3]) return false;

        if (p2 < 0 && s1[p1] !== s3[p3]) return false;

        if (s1[p1] !== s3[p3] && s2[p2] !== s3[p3]) return false;

        if (s1[p1] === s3[p3]) {
            search(p1 - 1, p2, p3 - 1);
        }

        if (s2[p2] === s3[p3]) {
            search(p1, p2 - 1, p3 - 1);
        }
    }

    search(s1.length - 1, s2.length - 1, s3.length - 1);

    return ans;
};


// var isInterleave = function(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) return false;

//     let ans = false;

//     let arr = Array(s1.length).fill(true).map(() => Array(s2.length).fill(true));

//     const search = (p1, p2, p3) => {
//         if (p3 < 0 && p1 < 0 && p2 < 0) {
//             ans = true;
//             return;
//         }

//         if (ans) return;

//         if (p1 < 0 && p2 < 0) return false;

//         if (p1 < 0 && s2[p2] !== s3[p3]) return false;

//         if (p2 < 0 && s1[p1] !== s3[p3]) return false;

//         if (p1 >= 0 && p2 >= 0 && arr[p1][p2] === false) return;

//         if (s1[p1] !== s3[p3] && s2[p2] !== s3[p3]) {
//             arr[p1][p2] = false;
//             return;
//         }

//         if (s1[p1] === s3[p3]) {
//             search(p1 - 1, p2, p3 - 1);
//         }

//         if (s2[p2] === s3[p3]) {
//             search(p1, p2 - 1, p3 - 1);
//         }
//     }

//     search(s1.length - 1, s2.length - 1, s3.length - 1);

//     return ans;
// };


// var isInterleave = function(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) return false;

//     let dp = Array(s1.length + 1).fill(false).map(() => Array(s2.length + 1).fill(false));

//     dp[dp.length - 1][dp[0].length - 1] = true;

//     for (let i = dp.length - 1; i >= 0; i--) {
//         for (let j = dp[0].length - 1; j >= 0; j--) {
//             if (i === dp.length - 1 && j === dp[0].length - 1) {
//                 continue;
//             }

//             if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
//                 dp[i][j] = true;
//             }

//             if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
//                 dp[i][j] = true;
//             }
//         }
//     }

//     return dp[0][0];
// };