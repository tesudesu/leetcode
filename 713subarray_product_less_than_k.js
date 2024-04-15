// https://leetcode.com/problems/subarray-product-less-than-k/

// Sliding window

var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0;
    let tot = 0;
    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
        while (product >= k && left <= i) {
            product /= nums[left];
            left++;
        }
        tot += i - left + 1;
    }

    return tot;
};


// Log, binary search

var numSubarrayProductLessThanK = function(nums, k) {
    let logk = Math.log(k) - 1e-9;
    let logPrefix = Array(nums.length).fill();
    logPrefix[0] = Math.log(nums[0]);

    for (let i = 1; i < logPrefix.length; i++) {
        logPrefix[i] = logPrefix[i - 1] + Math.log(nums[i]);
    }

    let tot = 0;

    for (let i = 0; i < logPrefix.length; i++) {
        let start = i;
        let end = logPrefix.length - 1;
        let res = -1;
        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;
            const prev = i === 0 ? 0 : logPrefix[i - 1];
            if (logPrefix[mid] - prev < logk) {
                res = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        if (res > -1) {
            tot += res - i + 1;
        }
    }

    return tot;
};


// Brute force

// var numSubarrayProductLessThanK = function(nums, k) {
//     let tot = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let product = 1;
//         for (let j = i; j < nums.length; j++) {
//             product *= nums[j];
//             if (product < k) {
//                 tot++;
//             } else {
//                 break;
//             }
//         }
//     }
//     return tot;
// };