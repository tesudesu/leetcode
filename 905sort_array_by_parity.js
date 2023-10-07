// https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function(nums) {
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            const temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++;
        }
    }

    return nums;
};


// var sortArrayByParity = function(nums) {
//     nums.sort((a, b) => {
//         if (a % 2 === 0 && b % 2 !== 0) {
//             return -1;
//         }
//     });

//     return nums;
// };


// var sortArrayByParity = function(nums) {
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             ans.unshift(nums[i]);
//         } else {
//             ans.push(nums[i]);
//         }
//     }
//     return ans;
// };