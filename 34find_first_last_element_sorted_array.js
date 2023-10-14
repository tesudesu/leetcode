// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        if (nums[mid] === target) {
            let leftStart = start;
            let leftEnd = mid;
            let left = mid;
            while (leftStart <= leftEnd) {
                const leftMid = Math.floor((leftEnd - leftStart) / 2) + leftStart;
                if (nums[leftMid] === target) {
                    leftEnd = leftMid - 1;
                    left = leftMid;
                } else {
                    leftStart = leftMid + 1;
                }
            }

            let rightStart = mid + 1;
            let rightEnd = end;
            let right = mid;
            while (rightStart <= rightEnd) {
                const rightMid = Math.floor((rightEnd - rightStart) / 2) + rightStart;
                if (nums[rightMid] === target) {
                    rightStart = rightMid + 1;
                    right = rightMid;
                } else {
                    rightEnd = rightMid - 1;
                }
            }
            return [left, right];
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return [-1, -1];
};


// var searchRange = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let i = -1;
//     let j = -1;

//     while (start <= end) {
//         let mid = Math.floor((end - start) / 2) + start;

//         if (nums[mid] === target) {
//             let start1 = mid + 1;
//             let end1 = nums.length - 1;
//             j = mid;
//             i = mid;

//             while (start1 <= end1) {
//                 let mid1 = Math.floor((end1 - start1) / 2) + start1;

//                 if (nums[mid1] === target) {
//                     j = mid1;
//                     start1 = mid1 + 1;
//                     continue;
//                 }

//                 if (nums[mid1] > target) {
//                     end1 = mid1 - 1;
//                     continue;
//                 }
//             }

//             let start2 = start;
//             let end2 = mid - 1;

//             while (start2 <= end2) {
//                 let mid2 = Math.floor((end2 - start2) / 2) + start2;

//                 if (nums[mid2] === target) {
//                     i = mid2;
//                     end2 = mid2 - 1;
//                     continue;
//                 }

//                 if (nums[mid2] < target) {
//                     start2 = mid2 + 1;
//                     continue;
//                 }
//             }

//             return [i, j];
//         }

//         if (nums[mid] > target) {
//             end = mid - 1;
//             continue;
//         }

//         if (nums[mid] < target) {
//             start = mid + 1;
//             continue;
//         }
//     }

//     return [-1, -1];
// };