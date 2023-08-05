// https://leetcode.com/problems/number-of-longest-increasing-subsequence/

var findNumberOfLIS = function(nums) {
    let LIS = Array(nums.length).fill(1);
    let counts = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
            }
        }
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j] && LIS[j] === LIS[i] - 1) {
                count += counts[j];
            }
        }
        counts[i] = Math.max(count, counts[i]);
    }

    let maxLIS = LIS[0];

    for (let i = 1; i < LIS.length; i++) {
        maxLIS = Math.max(maxLIS, LIS[i]);
    }

    let totCounts = 0;

    for (let i = 0; i < LIS.length; i++) {
        if (LIS[i] === maxLIS) {
            totCounts += counts[i];
        }
    }

    return totCounts;
};


// var findNumberOfLIS = function(nums) {
//     let LIS = Array(nums.length).fill(1);
//     let counts = Array(nums.length).fill(1);

//     let maxLIS = 1;
//     let totCounts = 1;

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 if (LIS[j] + 1 > LIS[i]) {
//                     LIS[i] = LIS[j] + 1;
//                     counts[i] = counts[j];
//                 } else if (LIS[j] + 1 === LIS[i]) {
//                     counts[i] += counts[j];
//                 }
//             }
//         }
//         if (LIS[i] > maxLIS) {
//             maxLIS = LIS[i];
//             totCounts = counts[i];
//         } else if (LIS[i] === maxLIS) {
//             totCounts += counts[i];
//         }
//     }

//     return totCounts;
// };