// https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function(nums) {
    let res = Array(nums.length);
    let forward = [nums[0]];
    let backward = [nums[nums.length - 1]];

    for (let i = 1; i < nums.length; i++) {
        forward.push(nums[i] * forward[forward.length - 1]);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        backward.push(nums[i] * backward[backward.length - 1]);
    }

    res[res.length - 1] = forward[forward.length - 2];
    res[0] = backward[backward.length - 2];

    ind = 0;

    for (let i = 1; i < res.length - 1; i++) {
        res[i] = forward[0 + ind] * backward[backward.length - 3 - ind];
        ind++;
    }

    return res;
};