// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function(nums) {
    nums.sort((a,b) => a-b);
    const length = nums.length;
    return Math.max(nums[length-1] * nums[length-2] * nums[length-3], nums[length-1] * nums[0] * nums[1]);
};