// https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/

var maximumBeauty = function(nums, k) {
    let maxBeauty = 1;
    nums.sort((a, b) => a - b);
    let left = 0;

    for (let i = 1; i < nums.length; i++) {
        while (nums[i] - nums[left] > 2 * k) {
            left++;
        }
        maxBeauty = Math.max(maxBeauty, i - left + 1);
    }

    return maxBeauty;
};