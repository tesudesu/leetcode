// https://leetcode.com/problems/find-the-integer-added-to-array-i/

var addedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    return nums2[0] - nums1[0];
};