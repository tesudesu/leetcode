// https://leetcode.com/problems/zero-array-transformation-i/

var isZeroArray = function(nums, queries) {
    let diff = Array(nums.length + 1).fill(0);

    for (const [l, r] of queries) {
        diff[l]--;
        diff[r + 1]++;
    }

    if (nums[0] + diff[0] > 0) {
        return false;
    }

    for (let i = 1; i < diff.length; i++) {
        diff[i] = diff[i - 1] + diff[i];
        if (diff[i] + nums[i] > 0) {
            return false;
        }
    }

    return true;
};