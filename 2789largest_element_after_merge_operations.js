// https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/

var maxArrayValue = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let ind = nums.length - 2;
    let tot = nums[nums.length - 1];
    let max = 0;

    while (ind >= 0) {
        if (nums[ind] <= tot) {
            tot += nums[ind];
        } else {
            tot = nums[ind];
        }

        ind--;
        max = Math.max(max, tot);
    }

    return max;
};