// https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/

// Sliding window

var maxNonDecreasingLength = function (nums1, nums2) {
    let longest = 1;
    let last = Math.min(nums1[0], nums2[0]);
    let tookMax = -1;
    let left = 0;

    for (let i = 1; i < nums1.length; i++) {
        const min = Math.min(nums1[i], nums2[i]);
        const max = Math.max(nums1[i], nums2[i]);
        if (min >= last) {
            last = min;
        } else if (max >= last) {
            if (tookMax === -1) tookMax = i;
            last = max;
        } else {
            longest = Math.max(longest, i - left);
            last = 0;
            if (tookMax === -1) {
                left = i;
                i--;
            } else {
                left = tookMax;
                i = tookMax - 1;
                tookMax = -1;
            }
        }
    }

    longest = Math.max(longest, nums1.length - left);

    return longest;
};


// var maxNonDecreasingLength = function (nums1, nums2) {
//     let longest = 1;
//     let last = Math.min(nums1[0], nums2[0]);
//     let tookMax = -1;
//     let left = 0;

//     for (let i = 1; i < nums1.length; i++) {
//         const min = Math.min(nums1[i], nums2[i]);
//         const max = Math.max(nums1[i], nums2[i]);
//         let curr;
//         if (min >= last) {
//             curr = min;
//         } else if (max >= last) {
//             if (tookMax === -1) tookMax = i;
//             curr = max;
//         } else {
//             last = 0;
//             if (tookMax === -1) {
//                 left = i;
//                 i--;
//             } else {
//                 left = tookMax;
//                 i = tookMax - 1;
//                 tookMax = -1;
//             }
//         }
//         if (curr) {
//             last = curr;
//             longest = Math.max(longest, i - left + 1);
//         }
//     }

//     return longest;
// };


// DP

// var maxNonDecreasingLength = function (nums1, nums2) {
//     let dp1 = Array(nums1.length).fill(1);
//     let dp2 = Array(nums1.length).fill(1);
    
//     for (let i = 1; i < nums1.length; i++) {
//         if (nums1[i] >= nums1[i - 1] && nums1[i] >= nums2[i - 1]) {
//             dp1[i] = Math.max(dp1[i - 1], dp2[i - 1]) + 1; 
//         } else if (nums1[i] >= nums1[i - 1]) {
//             dp1[i] = dp1[i - 1] + 1;
//         } else if (nums1[i] >= nums2[i - 1]) {
//             dp1[i] = dp2[i - 1] + 1;
//         }

//         if (nums2[i] >= nums1[i - 1] && nums2[i] >= nums2[i - 1]) {
//             dp2[i] = Math.max(dp1[i - 1], dp2[i - 1]) + 1; 
//         } else if (nums2[i] >= nums1[i - 1]) {
//             dp2[i] = dp1[i - 1] + 1;
//         } else if (nums2[i] >= nums2[i - 1]) {
//             dp2[i] = dp2[i - 1] + 1;
//         }
//     }

//     return Math.max(...dp1, ...dp2);
// };