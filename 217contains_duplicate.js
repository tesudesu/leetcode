// https://leetcode.com/problems/contains-duplicate/

// SOLUTION 1

var containsDuplicate = function(nums) {
    const set = new Set(nums);
    return !(set.size == nums.length);
};

// SOLUTION 2

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.lastIndexOf(nums[i]) !== i) {
            return true;
        }
    }
    return false;
};

// SOLUTION 3

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.slice(i+1).indexOf(nums[i]) !== -1) {
            return true;
        }
    }
    return false;
};