// https://leetcode.com/problems/find-the-difference-of-two-arrays/

var findDifference = function(nums1, nums2) {
    let one = [];
    let two = [];
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    nums1Set.forEach(val => {
        if (!nums2Set.has(val)) {
            one.push(val);
        }
    });
    nums2Set.forEach(val => {
        if (!nums1Set.has(val)) {
            two.push(val);
        }
    });
    return [one, two];
};