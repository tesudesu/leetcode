// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/

var minimumSum = function(nums) {
    let minLeft = Array(nums.length).fill(Infinity);
    let minRight = Array(nums.length).fill(Infinity);

    for (let i = 1; i < nums.length; i++) {
        minLeft[i] = Math.min(minLeft[i - 1], nums[i - 1]);
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        minRight[i] = Math.min(minRight[i + 1], nums[i + 1]);
    }

    let ans = Infinity;

    for (let i = 1; i < nums.length - 1; i++) {
        if (minLeft[i] < nums[i] && minRight[i] < nums[i]) {
            ans = Math.min(ans, minLeft[i] + nums[i] + minRight[i]);
        }
    }

    return ans === Infinity ? -1 : ans;
};