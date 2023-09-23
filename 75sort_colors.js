// https://leetcode.com/problems/sort-colors/

// One-pass

var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (nums[start] === 0) start++;
    while (nums[end] === 2) end--;

    for (let i = start; i <= end; i++) {
        if (nums[i] === 0) {
            nums[i] = nums[start];
            nums[start] = 0;
            start++;
        } else if (nums[i] === 2) {
            nums[i] = nums[end];
            nums[end] = 2;
            end--;
            i--;
        }
    }
};


// var sortColors = function(nums) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start < end) {
//         while (nums[start] === 0) start++;
//         while (nums[end] === 2) end--;

//         for (let i = start; i <= end; i++) {
//             if (nums[i] === 0) {
//                 nums[i] = nums[start];
//                 nums[start] = 0;
//                 break;
//             } else if (nums[i] === 2) {
//                 nums[i] = nums[end];
//                 nums[end] = 2;
//                 break;
//             }
//         }

//         if (nums[start] === 1 && nums[end] === 1) break;
//     }
// };


// Two-pass, bucket sort

// var sortColors = function(nums) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) + 1) || 1);
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (map.get(0) > 0) {
//             nums[i] = 0;
//             map.set(0, map.get(0) - 1);
//         } else if (map.get(1) > 0) {
//             nums[i] = 1;
//             map.set(1, map.get(1) - 1);
//         } else {
//             nums[i] = 2;
//         }
//     }
// };