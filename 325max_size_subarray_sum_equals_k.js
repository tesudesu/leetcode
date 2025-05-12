// https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

var maxSubArrayLen = function(nums, k) {
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let target = sum - k;
        if (map.has(target)) {
            ans = Math.max(ans, i - map.get(target));
        } 
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }

    return ans;
};