// https://leetcode.com/problems/find-the-integer-added-to-array-ii/

var minimumAddedInteger = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let min = Infinity;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            let p = 0;
            let found = true;
            let diff;
            for (let k = 0; k < nums1.length; k++) {
                if (k === i || k === j) continue;
                if (diff === undefined) {
                    diff = nums2[p] - nums1[k];
                } else if (nums2[p] - nums1[k] !== diff) {
                    found = false;
                    break;
                }
                p++;
            }
            if (found) {
                min = Math.min(min, diff);
            }
        }
    }

    return min;
};