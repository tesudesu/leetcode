// https://leetcode.com/problems/minimum-operations-to-maximize-last-elements-in-arrays/description/

var minOperations = function(nums1, nums2) {
    const n = nums1.length;

    const compare = (last1, last2) => {
        let tot = 0;
        for (let i = 0; i < n - 1; i++) {
            if (nums1[i] > last1 || nums2[i] > last2) {
                if (nums2[i] <= last1 && nums1[i] <= last2) {
                    tot++;
                } else {
                    return Infinity;
                }
            }
        }
        return tot;
    }

    const ans = Math.min(compare(nums1[n - 1], nums2[n - 1]), compare(nums2[n - 1], nums1[n - 1]) + 1);
    return ans === Infinity ? -1 : ans;
};


// var minOperations = function(nums1, nums2) {
//     const n = nums1.length;

//     let tot1 = 0;
//     let isPossible1 = true;

//     // don't change last
//     for (let i = 0; i < n - 1; i++) {
//         if (nums1[i] > nums1[n - 1] || nums2[i] > nums2[n - 1]) {
//             if (nums2[i] <= nums1[n - 1] && nums1[i] <= nums2[n - 1]) {
//                 tot1++;
//             } else {
//                 isPossible1 = false;
//                 break;
//             }
//         }
//     }

//     let tot2 = 1;
//     let isPossible2 = true;

//     // change last
//     for (let i = 0; i < n - 1; i++) {
//         if (nums1[i] > nums2[n - 1] || nums2[i] > nums1[n - 1]) {
//             if (nums2[i] <= nums2[n - 1] && nums1[i] <= nums1[n - 1]) {
//                 tot2++;
//             } else {
//                 isPossible2 = false;
//                 break;
//             }
//         }
//     }

//     if (isPossible1 && isPossible2) {
//         return Math.min(tot1, tot2);
//     } else if (isPossible1) {
//         return tot1;
//     } else if (isPossible2) {
//         return tot2;
//     } else {
//         return -1;
//     }
// };