// https://leetcode.com/problems/count-of-interesting-subarrays/

var countInterestingSubarrays = function(nums, modulo, k) {
    let counts = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % modulo === k) counts[i]++;
    }

    let res = 0;

    const map = new Map();

    let count = 0;

    for (let i = 0; i < counts.length; i++) {
        count += counts[i];
        let remainder = count % modulo;
        if (remainder === k) res++;
        if (map.has(remainder)) res += map.get(remainder);
        map.set((remainder + k) % modulo, (map.get((remainder + k) % modulo) + 1) || 1);
    }

    return res;
};