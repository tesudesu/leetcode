// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

var countSubarrays = function(nums, minK, maxK) {
    let lastMin = -1;
    let lastMax = -1;
    let lastInvalid = -1;

    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            lastMin = -1;
            lastMax = -1;
            lastInvalid = i;
        }
        if (nums[i] === minK) {
            lastMin = i;
        } 
        if (nums[i] === maxK) {
            lastMax = i;
        }
        if (lastMin === -1 || lastMax === -1) {
            continue;
        }
        tot += Math.min(lastMin, lastMax) - lastInvalid;
    }

    return tot;
};