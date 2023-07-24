// https://leetcode.com/problems/smallest-range-i/

var smallestRangeI = function(nums, k) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const ans = max - min - (2 * k);
    return ans <= 0 ? 0 : ans;
};