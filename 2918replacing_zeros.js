// https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/

var minSum = function(nums1, nums2) {
    let sum1 = 0;
    let sum2 = 0;
    let zero1 = 0;
    let zero2 = 0;

    for (let i = 0; i < nums1.length; i++) {
        sum1 += nums1[i];
        if (nums1[i] === 0) {
            zero1++;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        sum2 += nums2[i];
        if (nums2[i] === 0) {
            zero2++;
        }
    }

    let combined1 = sum1 + zero1;
    let combined2 = sum2 + zero2;

    if (combined1 < combined2 && zero1 === 0) return -1;
    if (combined2 < combined1 && zero2 === 0) return -1;

    return Math.max(combined1, combined2);
};