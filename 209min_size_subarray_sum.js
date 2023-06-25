// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(target, nums) {
    let size = Infinity;
    let currSum = 0;
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return 1;

        currSum += nums[i];

        while (currSum >= target) {
            size = Math.min(i - left + 1, size);
            currSum -= nums[left];
            left++;
        }
    }
    return size === Infinity ? 0 : size;
};