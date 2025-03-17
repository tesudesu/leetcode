// https://leetcode.com/problems/distinct-numbers-in-each-subarray/

var distinctNumbers = function(nums, k) {
    let ans = Array(nums.length - k + 1).fill();

    let map = new Map();

    for (let i = 0; i < k; i++) {
        map.set(nums[i], (map.get(nums[i]) + 1) || 1);
    }

    ans[0] = map.size;

    for (let i = 1; i < ans.length; i++) {
        map.set(nums[i - 1], map.get(nums[i - 1]) - 1);
        if (map.get(nums[i - 1]) === 0) {
            map.delete(nums[i - 1]);
        }
        map.set(nums[i + k - 1], (map.get(nums[i + k - 1]) + 1) || 1);
        ans[i] = map.size;
    }

    return ans;
};