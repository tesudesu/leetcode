// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }

    return maxSum;
};

// var maxSubArray = function(nums) {
//     let maxSum = 0;
//     let currSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i];
//         if (currSum < 0) {
//             currSum = 0;
//         } else {
//             maxSum = Math.max(maxSum, currSum);
//         }
//     }

//     if (maxSum === 0) {
//         const max = Math.max(...nums);
//         if (max < 0) return max;
//     }

//     return maxSum;
// };