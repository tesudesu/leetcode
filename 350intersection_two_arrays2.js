// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let ind = nums2.indexOf(nums1[i]);
        if (ind >= 0) {
            result.push(nums1[i]);
            nums2[ind] = -1;
        }
    }
    return result;
};