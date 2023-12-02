// https://leetcode.com/problems/arithmetic-subarrays/

// No sorting

var checkArithmeticSubarrays = function(nums, l, r) {
    let ans = Array(l.length).fill(true);

    for (let i = 0; i < l.length; i++) {
        let max = -Infinity;
        let min = Infinity;
        let rangeValues = new Set();

        for (let j = l[i]; j <= r[i]; j++) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            rangeValues.add(nums[j]);
        }

        let diff = (max - min) / (r[i] - l[i]);
        if (!Number.isInteger(diff)) {
            ans[i] = false;
            continue;
        }

        for (let j = 1; j <= r[i] - l[i]; j++) {
            min += diff;
            if (!rangeValues.has(min)) {
                ans[i] = false;
                break;
            }
        }
    }

    return ans;
};


// Sorting

var checkArithmeticSubarrays = function(nums, l, r) {
    let ans = Array(l.length).fill(true);

    for (let i = 0; i < l.length; i++) {
        let subarr = nums.slice(l[i], r[i] + 1);
        subarr.sort((a, b) => a - b);
        let diff = subarr[1] - subarr[0];
        for (let j = 2; j < subarr.length; j++) {
            if (subarr[j] - subarr[j - 1] !== diff) {
                ans[i] = false;
                break;
            }
        }
    }

    return ans;
};