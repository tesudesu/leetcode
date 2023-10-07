// https://leetcode.com/problems/monotonic-array/

var isMonotonic = function(nums) {
    let increasing = null;
    for (let i = 1; i < nums.length; i++) {
        if (increasing && nums[i] < nums[i - 1]) return false;
        if (increasing === false && nums[i] > nums[i - 1]) return false;
        if (increasing === null) {
            if (nums[i] > nums[i - 1]) {
                increasing = true;
            } else if (nums[i] < nums[i - 1]) {
                increasing = false;
            }
        }
    }

    return true;
};


// var isMonotonic = function(nums) {
//     let curr = nums[0];
//     let increasing = true;
//     let decreasing = true;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > curr) {
//             decreasing = false;
//         } else if (nums[i] < curr) {
//             increasing = false;
//         }
//         if (!increasing && !decreasing) {
//             return false;
//         }
//         curr = nums[i];
//     }
//     return true;
// };