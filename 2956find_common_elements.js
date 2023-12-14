// https://leetcode.com/problems/find-common-elements-between-two-arrays/

var findIntersectionValues = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let ans = [0, 0];

    for (let i = 0; i < nums1.length; i++) {
        if (set2.has(nums1[i])) {
            ans[0]++;
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            ans[1]++;
        }
    }

    return ans;
};