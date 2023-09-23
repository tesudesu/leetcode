// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

// Sliding window O(n) time

var minOperations = function(nums, x) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    const target = sum - x;

    if (target === 0) return nums.length;

    let left = 0;
    let currSum = 0;
    let ans = Infinity;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        while (currSum > target && left < i) {
            currSum -= nums[left];
            left++;
        }

        if (currSum === target) {
            ans = Math.min(ans, nums.length - (i - left + 1));
        }
    }

    return ans === Infinity ? -1 : ans;
};


// var minOperations = function(nums, x) {
//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }

//     const target = sum - x;

//     if (target < 0) return -1;

//     let left = 0;
//     let right = 1;

//     let ans = Infinity;

//     let currSum = nums[0];

//     while (left <= right && right <= nums.length) {
//         if (currSum === target) {
//             ans = Math.min(ans, nums.length - (right - left));
//             currSum += nums[right];
//             right++;
//         } else if (currSum < target) {
//             currSum += nums[right];
//             right++;
//         } else {
//             currSum -= nums[left];
//             left++;
//         }
//     }

//     return ans === Infinity ? currSum === target ? nums.length : -1 : ans;
// };


// Brute force O(n^2) time

// var minOperations = function(nums, x) {
//     let prefix = Array(nums.length);
//     prefix[0] = nums[0];
//     let suffix = Array(nums.length);
//     suffix[suffix.length - 1] = nums[nums.length - 1];

//     for (let i = 1; i < nums.length; i++) {
//         prefix[i] = prefix[i - 1] + nums[i];
//     }

//     for (let i = nums.length - 2; i >= 0; i--) {
//         suffix[i] = suffix[i + 1] + nums[i];
//     }

//     let ans = Infinity;

//     for (let i = 0; i < prefix.length; i++) {
//         if (prefix[i] === x) {
//             ans = Math.min(ans, i + 1);
//         } else if (prefix[i] > x) {
//             break;
//         }
//     } 

//     for (let i = suffix.length - 1; i >= 0; i--) {
//         if (suffix[i] === x) {
//             ans = Math.min(ans, suffix.length - i);
//         } else if (suffix[i] > x) {
//             break;
//         }
//     }

//     for (let i = 0; i < prefix.length; i++) {
//         for (let j = suffix.length - 1; j > i; j--) {
//             if (prefix[i] + suffix[j] === x) {
//                 ans = Math.min(ans, i + 1 + suffix.length - j);
//             } else if (prefix[i] + suffix[j] > x) {
//                 break;
//             }
//         }
//     }

//     return ans === Infinity ? -1 : ans;
// };