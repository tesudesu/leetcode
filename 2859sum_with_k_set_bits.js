// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/

var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const binary = i.toString(2);
        let count = 0;
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === "1") {
                count++;
            }
        }
        if (count === k) {
            sum += nums[i];
        }
    }

    return sum;
};


// var sumIndicesWithKSetBits = function(nums, k) {
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let num = i;
//         let count = 0;
//         while (num > 0) {
//             if (num & 1 === 1) count++;
//             num = num >> 1;
//         }
//         if (count === k) {
//             sum += nums[i];
//         }
//     }

//     return sum;
// };