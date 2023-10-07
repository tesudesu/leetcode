// https://leetcode.com/problems/continuous-subarray-sum/

var checkSubarraySum = function(nums, k) {
    let prefix = Array(nums.length).fill();
    prefix[0] = nums[0];
    let hash = new Map();
    hash.set(prefix[0] % k, 0);

    for (let i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
        if (prefix[i] % k === 0) return true;
        if (hash.has(prefix[i] % k)) {
            if (i - hash.get(prefix[i] % k) > 1) {
                return true;
            }
        } else {
            hash.set(prefix[i] % k, i);
        }
    }

    return false;
};