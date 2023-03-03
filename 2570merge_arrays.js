// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

var mergeArrays = function(nums1, nums2) {
    let res = [];
    let ind = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (ind < nums2.length && nums1[i][0] === nums2[ind][0]) {
            res.push([nums1[i][0], nums1[i][1] + nums2[ind][1]]);
            ind++;
        } else if (ind < nums2.length && nums1[i][0] > nums2[ind][0]) {
            res.push([nums2[ind][0], nums2[ind][1]]);
            ind++;
            i--;
        } else {
            res.push([nums1[i][0], nums1[i][1]]);
        }
    }
    if (ind < nums2.length) {
        for (let i = ind; i < nums2.length; i++) {
            res.push([nums2[i][0], nums2[i][1]]);
        }
    }
    return res;
};