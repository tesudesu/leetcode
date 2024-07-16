// https://leetcode.com/problems/patching-array/

var minPatches = function(nums, n) {
    let maxInterval = 0;
    let patches = 0;
    let i = 0;

    while (maxInterval < n) {
        if (i === nums.length || nums[i] > maxInterval + 1) {
            patches++;
            maxInterval += maxInterval + 1;
        } else {
            maxInterval += nums[i];
            i++;
        }
    }

    return patches;
};