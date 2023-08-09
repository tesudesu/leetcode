// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Find pivot by comparing mid to last, do binary search on both ends

var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let middle;

    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (nums[mid] === target) return mid;

        if (start === end) {
            middle = mid;
            break;
        }

        if (nums[mid] < nums[nums.length - 1]) {
            end = mid;
            continue;
        }

        if (nums[mid] > nums[nums.length - 1]) {
            start = mid + 1;
            continue;
        }
    }

    start = 0;
    end = middle - 1;

    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
            continue;
        }

        if (nums[mid] < target) {
            start = mid + 1;
            continue;
        }
    }

    start = middle;
    end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            end = mid - 1;
            continue;
        }

        if (nums[mid] < target) {
            start = mid + 1;
            continue;
        }
    }

    return -1;
};


// One binary search, reference start

// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         const mid = start + Math.floor((end - start) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] > target) {
//             if (nums[mid] >= nums[start]) {
//                 if (target >= nums[start]) {
//                     end = mid - 1;
//                 } else {
//                     start = mid + 1;
//                 }
//             } else {
//                 end = mid - 1;
//             }
//         } else {
//             if (nums[mid] >= nums[start]) {
//                 start = mid + 1;
//             } else {
//                 if (target >= nums[start]) {
//                     end = mid - 1;
//                 } else {
//                     start = mid + 1;
//                 }
//             }
//         }
//     }

//     return -1;
// };


// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((end - start) / 2) + start;

//         if (nums[mid] === target) return mid;

//         if (nums[mid] < nums[start]) {
//             if (target > nums[mid] && target < nums[start]) {
//                 start = mid + 1;
//             } else if (target > nums[mid]) {
//                 end = mid - 1;
//             } else if (target < nums[mid]) {
//                 end = mid - 1;
//             }
//             continue;
//         }

//         if (nums[mid] >= nums[start]) {
//             if (target > nums[mid]) {
//                 start = mid + 1;
//             } else if (target < nums[mid] && target >= nums[start]) {
//                 end = mid - 1;
//             } else if (target < nums[mid] && target < nums[start]) {
//                 start = mid + 1;
//             }
//             continue;
//         }
//     }

//     return -1;
// };


// One binary search, reference end

// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let mid = Math.floor((end - start) / 2) + start;

//         if (nums[mid] === target) return mid;

//         if (nums[mid] <= nums[end]) {
//             if (target > nums[mid] && target <= nums[end]) {
//                 start = mid + 1;
//             } else if (target > nums[mid]) {
//                 end = mid - 1;
//             } else if (target < nums[mid]) {
//                 end = mid - 1;
//             }
//             continue;
//         }

//         if (nums[mid] > nums[end]) {
//             if (target > nums[mid]) {
//                 start = mid + 1;
//             } else if (target < nums[mid] && target >= nums[start]) {
//                 end = mid - 1;
//             } else if (target < nums[mid] && target < nums[start]) {
//                 start = mid + 1;
//             }
//             continue;
//         }
//     }

//     return -1;
// };