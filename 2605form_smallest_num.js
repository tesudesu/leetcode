// https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/

var minNumber = function(nums1, nums2) {
    let min1 = 10;
    let same = 10;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] < min1) {
            min1 = nums1[i];
        }
        if (nums2.includes(nums1[i])) {
            if (nums1[i] < same) {
                same = nums1[i];
            }
        }
    }
    if (same < 10) {
        return same;
    } else {
        let min2 = 10;
        for (let i = 0; i < nums2.length; i++) {
            if (nums2[i] < min2) {
                min2 = nums2[i];
            }
        }
        if (min1 < min2) {
            return (min1 * 10) + min2;
        } else {
            return (min2 * 10) + min1;
        }
    }
};