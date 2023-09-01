// https://leetcode.com/problems/maximum-length-of-pair-chain/

var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[0] - b[0]);

    let dp = Array(pairs.length).fill(1);

    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};


// var findLongestChain = function(pairs) {
//     pairs.sort((a, b) => a[1] - b[1]);

//     let tot = 1;

//     let prev = pairs[0][1];

//     for (let i = 1; i < pairs.length; i++) {
//         if (pairs[i][0] > prev) {
//             tot++;
//             prev = pairs[i][1];
//         }
//     }

//     return tot;
// };