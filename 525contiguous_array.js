// https://leetcode.com/problems/contiguous-array/

var findMaxLength = function(nums) {
    let sum = 0;
    const prefixSum = new Map();
    prefixSum.set(0, -1);
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (prefixSum.has(sum)) {
            maxLength = Math.max(maxLength, i - prefixSum.get(sum));
        } else {
            prefixSum.set(sum, i);
        }
    }

    return maxLength;
};


var findMaxLength = function(nums) {
    let diff = 0;
    const map = new Map();
    map.set(0, -1);
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            diff++;
        } else {
            diff--;
        }
        if (map.has(diff)) {
            ans = Math.max(ans, i - map.get(diff));
        } else {
            map.set(diff, i);
        }
    }

    return ans;
};


// var findMaxLength = function(nums) {
//     let zeroCount = Array(nums.length + 1).fill(0);
//     let oneCount = Array(nums.length + 1).fill(0);

//     let maxLength = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroCount[i + 1] = zeroCount[i] + 1;
//             oneCount[i + 1] = oneCount[i];
//         } else {
//             oneCount[i + 1] = oneCount[i] + 1;
//             zeroCount[i + 1] = zeroCount[i];
//         }
//     }

//     for (let i = zeroCount.length - 1; i >= 1; i--) {
//         for (let j = 0; j < i; j++) {
//             if (zeroCount[i] - zeroCount[j] === oneCount[i] - oneCount[j]) {
//                 maxLength = Math.max(maxLength, (zeroCount[i] - zeroCount[j]) * 2);
//                 break;
//             }
//         }
//     }

//     return maxLength;
// };