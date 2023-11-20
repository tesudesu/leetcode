// https://leetcode.com/problems/frequency-of-the-most-frequent-element/

var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let currSum = 0;
    let left = 0;
    let maxWindow = 1;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        if ((i - left + 1) * nums[i] <= currSum + k) {
            maxWindow = Math.max(maxWindow, i - left + 1);
        } else {
            currSum -= nums[left];
            left++;
        }
    }

    return maxWindow;
};


// var maxFrequency = function(nums, k) {
//     nums.sort((a, b) => a - b);
//     let currSum = 0;
//     let left = 0;
//     let maxWindow = 1;

//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i];
//         while ((i - left + 1) * nums[i] > currSum + k) {
//             currSum -= nums[left];
//             left++;
//         }
//         maxWindow = Math.max(maxWindow, i - left + 1);
//     }

//     return maxWindow;
// };


// var maxFrequency = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     let currSum = 0;
//     let left = 0;
//     let maxWindow = 1;

//     for (let i = 0; i < nums.length; i++) {
//         currSum += nums[i];
//         while ((i - left + 1) * nums[left] > currSum + k) {
//             currSum -= nums[left];
//             left++;
//         }
//         maxWindow = Math.max(maxWindow, i - left + 1);
//     }

//     return maxWindow;
// };


// var maxFrequency = function(nums, k) {
//     let freq = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         freq.set(nums[i], (freq.get(nums[i]) + 1) || 1);
//     }
    
//     let unique = [...freq.keys()];
//     unique.sort((a, b) => b - a);

//     let max = 1;

//     for (let i = 0; i < unique.length; i++) {
//         let allowed = k;
//         let j = i + 1;
//         let count = freq.get(unique[i]);
//         while (j < unique.length && allowed > 0) {
//             const diff = unique[i] - unique[j];
//             if (allowed >= diff) {
//                 const add = Math.min(Math.floor(allowed / diff), freq.get(unique[j]));
//                 count += add;
//                 allowed -= add * diff;
//             } else {
//                 break;
//             }
//             j++;
//         }
//         max = Math.max(max, count);
//     }

//     return max;
// };