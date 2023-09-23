// https://leetcode.com/problems/median-of-two-sorted-arrays/

// Using binary search on shorter array, O(log(min(m, n))) time

var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(Infinity);
    nums1.unshift(-Infinity);
    nums2.push(Infinity);
    nums2.unshift(-Infinity);

    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);

    const shorter = nums1.length <= nums2.length ? nums1 : nums2;
    const longer = shorter === nums1 ? nums2 : nums1;

    let start = 0;
    let end = shorter.length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const totalFromShorter = mid + 1;
        const remain = half - totalFromShorter;
        const longerEnd = remain - 1;

        if (shorter[mid] <= longer[longerEnd + 1] && longer[longerEnd] <= shorter[mid + 1]) {
            if (totalLength % 2 === 1) {
                return Math.min(shorter[mid + 1], longer[longerEnd + 1]);
            } else {
                return (Math.max(shorter[mid], longer[longerEnd]) + Math.min(shorter[mid + 1], longer[longerEnd + 1])) / 2;
            }
        }

        if (shorter[mid] > longer[longerEnd + 1]) {
            end = mid - 1;
        } else if (longer[longerEnd] > shorter[mid + 1]) {
            start = mid + 1;
        }
    }
};


// O(n + m) time

// var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = Array(nums1.length + nums2.length).fill();

//     let pt1 = 0;
//     let pt2 = 0;

//     for (let i = 0; i < merged.length; i++) {
//         if (pt1 >= nums1.length) {
//             merged[i] = nums2[pt2];
//             pt2++;
//         } else if (pt2 >= nums2.length) {
//             merged[i] = nums1[pt1];
//             pt1++;
//         } else {
//             if (nums1[pt1] <= nums2[pt2]) {
//                 merged[i] = nums1[pt1];
//                 pt1++;
//             } else {
//                 merged[i] = nums2[pt2];
//                 pt2++;
//             }
//         }
//     }

//     if (merged.length === 2) {
//         return (merged[0] + merged[1]) / 2;
//     }

//     if (merged.length % 2 !== 0) {
//         return merged[Math.floor(merged.length / 2)];
//     } else {
//         return (merged[merged.length / 2] + merged[(merged.length / 2) - 1]) / 2;
//     }
// };