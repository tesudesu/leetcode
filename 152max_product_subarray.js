// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
    let max = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i] * currMax;
        const temp2 = nums[i] * currMin;
        currMax = Math.max(nums[i], temp, temp2);
        max = Math.max(max, currMax);
        currMin = Math.min(nums[i], temp, temp2);
    }

    return max;
};