// https://leetcode.com/problems/find-the-number-of-good-pairs-i/

var numberOfPairs = function(nums1, nums2, k) {
    let tot = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0) {
                tot++;
            }
        }
    }

    return tot;
};