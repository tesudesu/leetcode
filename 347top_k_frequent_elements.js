// https://leetcode.com/problems/top-k-frequent-elements/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var topKFrequent = function(nums, k) {
    let freqs = new Map();
    for (let i = 0; i < nums.length; i++) {
        freqs.set(nums[i], (freqs.get(nums[i]) + 1) || 1);
    }

    const maxQueue = new MaxPriorityQueue(a => a[0]);
    for (const combo of freqs) {
        maxQueue.enqueue([combo[1], combo[0]]);
    }

    let ans = [];

    for (let i = 0; i < k; i++) {
        ans.push(maxQueue.dequeue()[1]);
    }
    
    return ans;
};


// O(n) time, reverse bucket sort

// var topKFrequent = function(nums, k) {
//     let freqs = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         freqs.set(nums[i], (freqs.get(nums[i]) + 1) || 1);
//     }

//     let arr = Array(nums.length + 1).fill();

//     for (const combo of freqs) {
//         if (!arr[combo[1]]) {
//             arr[combo[1]] = [combo[0]];
//         } else {
//             arr[combo[1]].push(combo[0]);
//         }
//     }

//     let ans = [];
    
//     for (let i = arr.length - 1; i >= 1; i--) {
//         if (!arr[i]) continue;
//         const array = arr[i];
//         for (let j = 0; j < array.length; j++) {
//             if (ans.length === k) return ans;
//             ans.push(array[j]);
//         }
//     }

//     return ans;
// };


// Quickselect

// var topKFrequent = function(nums, k) {
//     let freqs = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         freqs.set(nums[i], (freqs.get(nums[i]) + 1) || 1);
//     }

//     let ans = [];

//     const quickselect = (map, i) => {
//         const pivot = map.entries().next().value[1];

//         let left = new Map();
//         let mid = new Map();
//         let right = new Map();

//         for (const combo of map) {
//             if (combo[1] === pivot) {
//                 mid.set(combo[0], combo[1]);
//             } else if (combo[1] < pivot) {
//                 right.set(combo[0], combo[1]);
//             } else {
//                 left.set(combo[0], combo[1]);
//             }
//         }

//         if (left.size + mid.size < i) {
//             for (const combo of left) {
//                 ans.push(combo[0]);
//             }
//             for (const combo of mid) {
//                 ans.push(combo[0]);
//             }
//             return quickselect(right, i - left.size - mid.size);
//         } else if (left.size + mid.size === i) {
//             for (const combo of left) {
//                 ans.push(combo[0]);
//             }
//             for (const combo of mid) {
//                 ans.push(combo[0]);
//             }
//             return ans;
//         } else if (left.size === i) {
//             for (const combo of left) {
//                 ans.push(combo[0]);
//             }
//             return ans;
//         } else if (left.size > i) {
//             return quickselect(left, i);
//         }
//     }

//     return quickselect(freqs, k);
// };