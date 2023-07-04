// https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/

var longestAlternatingSubarray = function (nums, threshold) {
    let longest = 0;
    let start = 0;

    while (start < nums.length) {
        if (nums[start] % 2 === 0 && nums[start] <= threshold) {
            let temp = 1;
            start++;
            for (let i = start; i < nums.length; i++) {
                if (nums[i] % 2 !== nums[i - 1] % 2 && nums[i] <= threshold) {
                    temp++;
                } else {
                    start = i;
                    break;
                }
            }
            longest = Math.max(longest, temp);
        } else {
            start++;
        }
    }

    return longest;
};


// var longestAlternatingSubarray = function(nums, threshold) {
//     let longest = 0;
//     let start = 0; 

//     while (start < nums.length) {
//         if (nums[start] % 2 !== 0 || nums[start] > threshold) {
//             start++;
//             continue;
//         }

//         let temp = 1;
//         start++;
//         for (let i = start; i < nums.length; i++) {
//             if (nums[i] % 2 !== nums[i-1] % 2 && nums[i] <= threshold) {
//                 temp++;
//             } else {
//                 start = i;
//                 break;
//             }
//         }
//         longest = Math.max(longest, temp);

//     }

//     return longest;
// };


// var longestAlternatingSubarray = function(nums, threshold) {
//     let longest = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0 && nums[i] <= threshold) {
//             let odd = true;
//             let temp = 1;
//             for (let j = i+1; j < nums.length; j++) {
//                 if (odd) {
//                     if (nums[j] % 2 !== 0 && nums[j] <= threshold) {
//                         temp++;
//                         odd = false;
//                     } else {
//                         break;
//                     }
//                 } else {
//                     if (nums[j] % 2 === 0 && nums[j] <= threshold) {
//                         temp++;
//                         odd = true;
//                     } else {
//                         break;
//                     }
//                 }
//             }
//             longest = Math.max(longest, temp);
//         }
//     }

//     return longest;
// };