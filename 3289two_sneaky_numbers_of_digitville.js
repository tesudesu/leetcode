// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/

var getSneakyNumbers = function(nums) {
    const set = new Set();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            ans.push(nums[i]);
            if (ans.length === 2) {
                return ans;
            }
        } else {
            set.add(nums[i]);
        }
    }
};