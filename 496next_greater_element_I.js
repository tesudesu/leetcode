// https://leetcode.com/problems/next-greater-element-i/

var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let ind = nums2.indexOf(nums1[i]);
        for (let j = ind+1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                result.push(nums2[j]);
                break;
            }
        }
        if (result.length != i+1) {
            result.push(-1);
        }
    }
    return result;
};