// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/

// Sliding window

var minOperations = function(nums) {
    let unique = new Set(nums);
    unique = [...unique];

    unique.sort((a, b) => a - b);

    let right = 0;

    let min = nums.length - 1;

    for (let i = 0; i < unique.length; i++) {
        const target = unique[i] + nums.length - 1;
        while (unique[right] <= target) {
            right++;
        }
        min = Math.min(min, nums.length - (right - i));
    }

    return min;
};


// Binary search

// var minOperations = function(nums) {
//     let unique = new Set(nums);
//     unique = [...unique];

//     unique.sort((a, b) => a - b);

//     let min = nums.length - 1;

//     for (let i = 0; i < unique.length; i++) {
//         let start = i + 1;
//         let end = unique.length - 1;
//         const target = unique[i] + nums.length - 1;

//         while (start <= end) {
//             const mid = Math.floor((end - start) / 2) + start;

//             if (unique[mid] <= target) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }

//         min = Math.min(min, nums.length - (start - i));
//     }

//     return min;
// };


// More wordy binary search

// var minOperations = function(nums) {
//     let unique = new Set(nums);
//     unique = [...unique];

//     unique.sort((a, b) => a - b);

//     let min = nums.length - 1;

//     for (let i = 0; i < unique.length; i++) {
//         let start = i + 1;
//         let end = unique.length - 1;
//         const target = unique[i] + nums.length - 1;
//         let found = false;

//         while (start <= end) {
//             const mid = Math.floor((end - start) / 2) + start;

//             if (unique[mid] === target) {
//                 min = Math.min(min, nums.length - (mid - i + 1));
//                 found = true;
//                 break;
//             } else if (unique[mid] < target) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }

//         if (!found) {
//             min = Math.min(min, nums.length - (start - i));
//         }
//     }

//     return min;
// };