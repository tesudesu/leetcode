// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Quickselect

var findKthLargest = function(nums, k) {
    const quickselect = (arr, i) => {
        const pivotInd = Math.floor(arr.length / 2);
        const pivot = arr[pivotInd];

        let left = [];
        let mid = [];
        let right = [];

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === pivot) {
                mid.push(arr[j]);
            } else if (arr[j] > pivot) {
                left.push(arr[j]);
            } else {
                right.push(arr[j]);
            }
        }

        if (left.length >= i) {
            return quickselect(left, i);
        } else if (i > left.length + mid.length) {
            return quickselect(right, i - left.length - mid.length);
        } else {
            return pivot;
        }
    }

    return quickselect(nums, k);
};


// const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

// var findKthLargest = function(nums, k) {
//     let maxQueue = new MaxPriorityQueue();
//     for (let i = 0; i < nums.length; i++) {
//         maxQueue.enqueue(nums[i]);
//     }
//     let ans;
//     for (let i = 1; i <= k; i++) {
//         ans = maxQueue.dequeue();
//     }
//     return ans;
// };


// var findKthLargest = function(nums, k) {
//     let largest = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > largest) largest = nums[i];
//     }

//     let diffHash = {};

//     for (let i = 0; i < nums.length; i++) {
//         const diff = largest - nums[i];
//         if (diffHash[diff]) {
//             diffHash[diff]++;
//         } else {
//             diffHash[diff] = 1;
//         }
//     }

//     let count = 0;
//     let diff = 0;

//     while (count < k) {
//         if (diffHash[diff]) {
//             count += diffHash[diff];
//         }
//         diff++;
//     }

//     return largest - diff + 1;
// };


// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k-1];
// };