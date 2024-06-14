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


var checkSubarraySum = function(nums, k) {
    let sum = nums[0];
    const seen = new Map();
    seen.set(sum, 0);

    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        if (sum % k === 0) {
            return true;
        }
        let complement = sum % k;
        while (complement <= sum) {
            if (seen.has(complement) && seen.get(complement) < i - 1) {
                return true;
            }
            complement += k;
        }
        if (!seen.has(sum)) {
            seen.set(sum, i);
        }
    }

    return false;
};