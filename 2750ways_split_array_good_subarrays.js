// https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/

var numberOfGoodSubarraySplits = function(nums) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            indices.push(i);
        }
    }

    if (indices.length === 0) return 0;
    if (indices.length === 1) return 1;

    let numbers = [];

    for (let i = 1; i < indices.length; i++) {
        numbers.push(indices[i] - indices[i-1]);
    }

    let ans = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        ans = (ans * numbers[i]) % (1e9 + 7);
    }

    return ans;
};