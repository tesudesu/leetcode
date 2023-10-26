// https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/

var numWays = function(steps, arrLen) {
    length = Math.min(arrLen, steps + 1);   // pointless to have arrLen over steps + 1
    let prev = Array(length).fill(0);
    prev[0] = 1;
    const mod = 1e9 + 7;

    for (let i = 0; i < steps; i++) {
        let curr = Array(length).fill(0);
        for (let j = 0; j < length; j++) {
            if (prev[j] > 0) {
                if (j - 1 >= 0) {
                    curr[j - 1] = (curr[j - 1] + prev[j]) % mod; 
                }
                curr[j] = (curr[j] + prev[j]) % mod;
                if (j + 1 < length) {
                    curr[j + 1] = (curr[j + 1] + prev[j]) % mod;
                }
            }
        }
        prev = curr;
    }

    return prev[0];
};


// var numWays = function(steps, arrLen) {
//     let prev = Array(arrLen).fill(0);
//     prev[0] = 1;
//     const mod = 1e9 + 7;

//     for (let i = 0; i < steps; i++) {
//         let curr = Array(arrLen).fill(0);
//         for (let j = 0; j < arrLen; j++) {
//             if (prev[j] > 0) {
//                 if (j - 1 >= 0) {
//                     curr[j - 1] = (curr[j - 1] + prev[j]) % mod; 
//                 }
//                 curr[j] = (curr[j] + prev[j]) % mod;
//                 if (j + 1 < arrLen) {
//                     curr[j + 1] = (curr[j + 1] + prev[j]) % mod;
//                 }
//             }
//         }
//         prev = curr;
//     }

//     return prev[0];
// };