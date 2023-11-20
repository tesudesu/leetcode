// https://leetcode.com/problems/maximum-strong-pair-xor-ii/

var maximumStrongPairXor = function(nums) {
    nums.sort((a, b) => a - b);

    let maxNum = Math.max(...nums);
    let maxBitLen = maxNum.toString(2).length;
    let mask = 0;
    let ans = 0;

    for (let i = maxBitLen - 1; i >= 0; i--) {
        mask = mask | (1 << i);
        let prefixes = new Map();
        let bestCaseXor = ans | (1 << i);
        for (let j = 0; j < nums.length; j++) {
            let prefix = nums[j] & mask;
            let smallerNum = prefix ^ bestCaseXor;
            if (prefixes.has(smallerNum) && prefixes.get(smallerNum) * 2 >= nums[j]) {
                ans = bestCaseXor;
                break;
            }
            prefixes.set(prefix, nums[j]);
        }
    }

    return ans;
};


// var maximumStrongPairXor = function(nums) {
//     nums.sort((a, b) => a - b);

//     let maxXOR = 0;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] - nums[i] <= nums[i]) {
//                 maxXOR = Math.max(maxXOR, nums[j] ^ nums[i]);
//             } else {
//                 break;
//             }
//         }
//     }

//     return maxXOR;
// };