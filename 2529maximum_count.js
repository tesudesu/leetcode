// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

var maximumCount = function(nums) {
    let ind;
    let neg = 0; 
    let pos = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (nums[i] < 0) {
            neg++;
        }
        if (nums[i] > 0) {
            ind = i;
            break;
        }
    }
    if (ind >= 0) {
        pos = length - ind;
    }
    return Math.max(neg, pos);
};