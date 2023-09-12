// https://leetcode.com/problems/range-sum-query-immutable/

var NumArray = function(nums) {
    this.prefix = Array(nums.length).fill(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        this.prefix[i] = this.prefix[i - 1] + nums[i];
    }
};

NumArray.prototype.sumRange = function(left, right) {
    const rightSum = this.prefix[right];
    const leftSum = this.prefix[left - 1] || 0;
    return rightSum - leftSum;
};