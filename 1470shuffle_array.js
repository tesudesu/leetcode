// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    let result = [];
    let second = n;
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[second]);
        second++;
    }
    return result;
};