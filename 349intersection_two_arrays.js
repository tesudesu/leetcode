// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    let ans = [];

    for (const num of set1) {
        if (set2.has(num)) {
            ans.push(num);
        }
    }

    return ans;
};


// var intersection = function(nums1, nums2) {
//     let result = [];
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums2.includes(nums1[i])) {
//             if (!result.includes(nums1[i])) {
//                 result.push(nums1[i]);
//             }
//         }
//     }
//     return result;
// };


// var intersection = function(nums1, nums2) {
//     let result = [];
//     const num1set = new Set(nums1);
//     const num1setarr = [...num1set];
//     for (let i = 0; i < num1setarr.length; i++) {
//         if (nums2.includes(num1setarr[i])) {
//             if (!result.includes(num1setarr[i])) {
//                 result.push(num1setarr[i]);
//             }
//         }
//     }
//     return result;
// };