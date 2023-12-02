// https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/

var getSumAbsoluteDifferences = function(nums) {
    let forward = Array(nums.length).fill(0);
    let backward = Array(nums.length).fill(0);

    let first = 0;
    for (let i = 1; i < nums.length; i++) {
        first += nums[i] - nums[0];
    }
    forward[0] = first;

    let last = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        last += nums[nums.length - 1] - nums[i];
    }
    backward[nums.length - 1] = last;

    for (let i = 1; i < nums.length; i++) {
        forward[i] = forward[i - 1] - (nums[i] - nums[i - 1]) * (nums.length - i);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        backward[i] = backward[i + 1] - (nums[i + 1] - nums[i]) * (i + 1);
    }

    let res = Array(nums.length).fill();
    for (let i = 0; i < res.length; i++) {
        res[i] = forward[i] + backward[i];
    }

    return res;
};