// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function(nums, k) {
    let prefixSumMap = new Map();

    let sum = 0;

    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) res++;

        const complement = sum - k;

        if (prefixSumMap.has(complement)) {
            res += prefixSumMap.get(complement);
        }

        prefixSumMap.set(sum, (prefixSumMap.get(sum) + 1) || 1);
    }

    return res;
};


// var subarraySum = function(nums, k) {
//     let res = 0;

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j];
//             if (sum === k) res++;
//         }
//     }

//     return res;
// };