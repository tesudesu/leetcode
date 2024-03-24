// https://leetcode.com/problems/minimum-common-value/

var getCommon = function(nums1, nums2) {
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++;
        }
    }

    return -1;
};


// var getCommon = function(nums1, nums2) {
//     let ind = 0;
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = ind; j < nums2.length; j++) {
//             if (nums2[j] == nums1[i]) {
//                 return nums1[i];
//             }
//             if (nums2[j] > nums1[i]) {
//                 ind = j;
//                 break;
//             }
//         }
//     }
//     return -1;
// };