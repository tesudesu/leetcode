// https://leetcode.com/problems/partition-array-according-to-given-pivot/

var pivotArray = function(nums, pivot) {
    let less = [];
    let greater = [];
    let middle = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            less.push(nums[i]);
        } else if (nums[i] > pivot) {
            greater.push(nums[i]);
        } else {
            middle.push(nums[i]);
        }
    }

    return [...less, ...middle, ...greater];
};