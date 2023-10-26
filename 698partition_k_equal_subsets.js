// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

var canPartitionKSubsets = function(nums, k) {
    let tot = 0;
    let freq = new Map();

    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
        freq.set(nums[i], (freq.get(nums[i]) + 1) || 1);
    }

    if (tot % k !== 0) return false;

    const each = tot / k;

    let used = Array(nums.length).fill(false);

    const backtrack = (index, rounds, sum) => {
        if (rounds === 0) return true;
        if (sum > each) return;
        if (sum === each) {
            return backtrack(0, rounds - 1, 0);
        }

        for (let i = index; i < nums.length; i++) {
            if (nums[i] > each) return false;
            if (used[i]) continue;
            used[i] = true;
            if (backtrack(i + 1, rounds, sum + nums[i])) return true;
            used[i] = false;
        }

        return false;
    }

    return backtrack(0, k, 0);
};