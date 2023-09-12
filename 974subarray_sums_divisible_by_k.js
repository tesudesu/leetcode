// https://leetcode.com/problems/subarray-sums-divisible-by-k/

var subarraysDivByK = function(nums, k) {
    let map = new Map();

    let res = 0;

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainder = ((sum % k) + k) % k; // handle negative remainders
        if (remainder === 0) res++;
        if (map.has(remainder)) {
            res += map.get(remainder);
        }
        map.set(remainder, (map.get(remainder) + 1) || 1);
    }

    return res;
};