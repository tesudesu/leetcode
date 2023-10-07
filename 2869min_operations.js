// https://leetcode.com/problems/minimum-operations-to-collect-elements/

var minOperations = function(nums, k) {
    let set = new Set();
    let ans = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.size === k) {
            return ans;
        }
        if (nums[i] <= k) {
            set.add(nums[i]);
        }
        ans++;
    }

    return ans;
};