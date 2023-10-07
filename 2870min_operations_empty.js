// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/

var minOperations = function(nums) {
    let freqs = new Map();

    for (let i = 0; i < nums.length; i++) {
        freqs.set(nums[i], (freqs.get(nums[i]) + 1) || 1);
    }

    let ans = 0;

    for (const [num, freq] of freqs) {
        if (freq === 1) {
            return -1;
        } else if (freq % 3 === 0) {
            ans += freq / 3;
        } else {
            ans += Math.floor(freq / 3) + 1;
        }
    }

    return ans;
};


// var minOperations = function(nums) {
//     let freqs = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         freqs.set(nums[i], (freqs.get(nums[i]) + 1) || 1);
//     }

//     let ans = 0;

//     for (const [num, freq] of freqs) {
//         if (freq % 3 === 0) {
//             ans += freq / 3;
//         } else {
//             let biggest = Math.floor(freq / 3) * 3;
//             let found = false;
//             while (biggest >= 3) {
//                 if ((freq - biggest) % 2 === 0) {
//                     ans += (biggest / 3) + (freq - biggest) / 2;
//                     found = true;
//                     break;
//                 }
//                 biggest -= 3;
//             }
//             if (!found) {
//                 if (freq % 2 === 0) {
//                     ans += freq / 2;
//                 } else {
//                     return -1;
//                 }
//             }
//         }
//     }

//     return ans;
// };