// https://leetcode.com/problems/merge-sorted-array/

// SOLUTION 1

var merge = function(nums1, m, nums2, n) {
    let counter = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] == 0) {
            nums1[i] = nums2[counter];
            counter++;
        }
        if (counter == n) {
            break;
        }
    }
    nums1.sort((a, b) => a - b);
};

// SOLUTION 2

var merge = function(nums1, m, nums2, n) {
    let counter = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[counter];
        counter++;
    }
    nums1.sort((a, b) => a - b);
};
