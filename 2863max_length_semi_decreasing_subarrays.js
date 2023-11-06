// https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/

var maxSubarrayLength = function(nums) {
    let mapped = nums.map((a, i) => [a, i]);
    mapped.sort((a, b) => {
        if (a[0] > b[0]) {
            return -1;
        } else if (a[0] < b[0]) {
            return 1;
        } else {
            if (a[1] < b[1]) {
                return 1;
            } else {
                return -1;
            }
        }
    });

    let minIndex = Infinity;
    let maxGap = 0;

    for (let i = 0; i < mapped.length; i++) {
        if (mapped[i][1] > minIndex) {
            maxGap = Math.max(maxGap, mapped[i][1] - minIndex + 1);
        } else {
            minIndex = mapped[i][1];
        }
    }

    return maxGap;
};


// var maxSubarrayLength = function(nums) {
//     let maxLength = 0;

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] < nums[j]) {
//                 maxLength = Math.max(maxLength, i - j + 1);
//                 break;
//             }
//         }
//     }

//     return maxLength;
// };