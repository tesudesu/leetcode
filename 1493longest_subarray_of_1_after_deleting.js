// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let zeroleft = 1;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroleft--;
        }

        if (zeroleft < 0) {
            if (nums[left] === 0) zeroleft++;
            left++;
        }
        right++;
    }

    return right - left - 1;
};

// var longestSubarray = function(nums) {
//     let left = 0;
//     let hasZero = false;
//     let lastZero;
//     let longest = 0;

//     for (let right = 0; right < nums.length; right++) {
//         if (nums[right] === 0) {
//             if (!hasZero) {
//                 hasZero = true;
//                 lastZero = right;
//             } else {
//                 longest = Math.max(longest, right - 1 - left);
//                 left = lastZero + 1;
//                 lastZero = right;
//             }
//         }

//     }

//     longest = Math.max(longest, nums.length - 1 - left);

//     return longest;
// };