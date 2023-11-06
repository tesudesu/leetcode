// https://leetcode.com/problems/find-k-closest-elements/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

// O(nlogn + klogn) time

var findClosestElements = function(arr, k, x) {
    const queue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    });

    for (let i = 0; i < arr.length; i++) {
        queue.enqueue([Math.abs(arr[i] - x), arr[i]]);
    }

    let ans = Array(k);

    for (let i = 0; i < k; i++) {
        ans[i] = queue.dequeue()[1];
    }

    return ans.sort((a, b) => a - b);
};


// O(n) time

// var findClosestElements = function(arr, k, x) {
//     let start = arr.length - 1;
//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             start = i;
//             break;
//         } else if (arr[i] > x) {
//             if (i - 1 >= 0 && x - arr[i - 1] <= arr[i] - x) {
//                 start = i - 1;
//             } else {
//                 start = i;
//             }
//             break;
//         }
//     }

//     res.push(arr[start]);

//     let left = start - 1;
//     let right = start + 1;

//     while (res.length < k) {
//         if (left < 0) {
//             res.push(arr[right]);
//             right++;
//         } else if (right >= arr.length) {
//             res.push(arr[left]);
//             left--;
//         } else {
//             if (x - arr[left] < arr[right] - x || x - arr[left] === arr[right] - x) {
//                 res.push(arr[left]);
//                 left--;
//             } else {
//                 res.push(arr[right]);
//                 right++;
//             }
//         }
//     }
    
//     return res.sort((a, b) => a - b);
// };


// O(logn + k) time

// var findClosestElements = function(arr, k, x) {
//     let start = 0;
//     let end = arr.length - 1;

//     let closest = arr.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((end - start) / 2) + start;

//         if (arr[mid] === x) {
//             closest = mid;
//             break;
//         } else if (arr[mid] < x) {
//             start = mid + 1;
//         } else {
//             if (mid === 0) {
//                 closest = mid;
//                 break;
//             } else if (arr[mid - 1] <= x) {
//                 if (x - arr[mid - 1] <= arr[mid] - x) {
//                     closest = mid - 1;
//                 } else {
//                     closest = mid;
//                 }
//                 break;
//             } else {
//                 end = mid - 1;
//             }
//         }
//     }

//     let res = [];
//     res.push(arr[closest]);

//     let left = closest - 1;
//     let right = closest + 1;

//     while (res.length < k) {
//         if (left < 0) {
//             res.push(arr[right]);
//             right++;
//         } else if (right >= arr.length) {
//             res.push(arr[left]);
//             left--;
//         } else {
//             if (x - arr[left] < arr[right] - x || x - arr[left] === arr[right] - x) {
//                 res.push(arr[left]);
//                 left--;
//             } else {
//                 res.push(arr[right]);
//                 right++;
//             }
//         }
//     }
    
//     return res.sort((a, b) => a - b);
// };


// O(log(n - k) + k) time

// var findClosestElements = function(arr, k, x) {
//     let res = [];

//     let start = 0;
//     let end = arr.length - k;

//     while (start < end) {
//         const mid = Math.floor((end - start) / 2) + start;

//         if (arr[mid + k] - x < x - arr[mid]) {
//             start = mid + 1;
//         } else {
//             end = mid;
//         }
//     }

//     for (let i = end; i < end + k; i++) {
//         res.push(arr[i]);
//     }

//     return res;
// };