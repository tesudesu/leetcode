// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

// Second solution

// var moveZeroes = function(nums) {
//     let indZero = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             indZero.push(i);
//         }
//     }
//     for (let i = indZero.length - 1; i >= 0; i--) {
//         nums.splice(indZero[i], 1);
//         nums.push(0);
//     }
// };