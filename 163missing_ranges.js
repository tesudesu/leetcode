// https://leetcode.com/problems/missing-ranges/

var findMissingRanges = function(nums, lower, upper) {
    let res = [];

    if (nums.length === 0) {
        res.push([lower, upper]);
        return res;
    } 

    if (lower < nums[0]) {
        res.push([lower, nums[0] - 1]);
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            res.push([nums[i - 1] + 1, nums[i] - 1]);
        }
    }

    if (upper > nums[nums.length - 1]) {
        res.push([nums[nums.length - 1] + 1, upper]);
    }

    return res;
};