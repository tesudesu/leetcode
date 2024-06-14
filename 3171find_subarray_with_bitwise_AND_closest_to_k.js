// https://leetcode.com/problems/find-subarray-with-bitwise-and-closest-to-k/

var minimumDifference = function(nums, k) {
    let min = Infinity;

    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, Math.abs(k - nums[i]));
        for (let j = i - 1; j >= 0; j--) {
            nums[j] = (nums[i] & nums[j]);
            if (j - 1 >= 0 && nums[j] === nums[j - 1]) {
                break;
            }
            min = Math.min(min, Math.abs(k - nums[j]));
        }
    }

    return min;
};