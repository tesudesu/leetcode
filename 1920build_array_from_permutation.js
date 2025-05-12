// https://leetcode.com/problems/build-array-from-permutation/

var buildArray = function(nums) {
    let ans = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};