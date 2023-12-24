// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// O(nlogn) time

var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a);

    return (nums[0] * nums[1]) - (nums[nums.length - 1] * nums[nums.length - 2]);
};


// O(n) time

var maxProductDifference = function(nums) {
    let max = -Infinity;
    let nextMax = -Infinity;
    let min = Infinity;
    let nextMin = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            nextMax = max;
            max = nums[i];
        } else if (nums[i] > nextMax) {
            nextMax = nums[i];
        }
        if (nums[i] < min) {
            nextMin = min;
            min = nums[i];
        } else if (nums[i] < nextMin) {
            nextMin = nums[i];
        }
    }

    return (max * nextMax) - (min * nextMin);
};