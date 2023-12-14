// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function(nums) {
    let max = -Infinity;
    let nextMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            nextMax = max;
            max = nums[i];
        } else if (nums[i] > nextMax) {
            nextMax = nums[i];
        }
    }

    return (max - 1) * (nextMax - 1);
};