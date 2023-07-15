// https://leetcode.com/problems/maximum-sum-circular-subarray/

var maxSubarraySumCircular = function (nums) {
    let maxSum = -Infinity;
    let currMaxSum = 0;
    let minSum = Infinity;
    let currMinSum = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        currMaxSum += nums[i];
        maxSum = Math.max(maxSum, currMaxSum);
        if (currMaxSum < 0) {
            currMaxSum = 0;
        }

        currMinSum += nums[i];
        if (nums[i] < currMinSum) {
            currMinSum = nums[i];
        }
        minSum = Math.min(minSum, currMinSum);
        
        total += nums[i];
    }

    if (maxSum <= 0) {
        return maxSum;
    } else {
        return Math.max(total - minSum, maxSum);
    }
};

// var maxSubarraySumCircular = function (nums) {
//     let maxSuffixSum = Array(nums.length);

//     maxSuffixSum[maxSuffixSum.length - 1] = nums[nums.length - 1];
    
//     let suffixSum = maxSuffixSum[maxSuffixSum.length - 1];

//     for (i = nums.length - 2; i >= 0; i--) {
//         suffixSum += nums[i];
//         maxSuffixSum[i] = Math.max(maxSuffixSum[i + 1], suffixSum);
//     }

//     let maxSum = -Infinity;
//     let currSum = 0;
//     let prefixSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i];
//         maxSum = Math.max(maxSum, currSum);
//         if (currSum < 0) currSum = 0;

//         if (i + 1 < nums.length) {
//             prefixSum += nums[i];
//             maxSum = Math.max(maxSum, prefixSum + maxSuffixSum[i + 1]);
//         }
//     }

//     return maxSum;
// };