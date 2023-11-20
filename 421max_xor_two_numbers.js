// https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/

var findMaximumXOR = function(nums) {
    let maxNum = Math.max(...nums);
    let maxBitLen = maxNum.toString(2).length;
    let mask = 0;
    let ans = 0;

    for (let i = maxBitLen - 1; i >= 0; i--) {
        mask = mask | (1 << i);
        let prefixes = new Set();
        for (let j = 0; j < nums.length; j++) {
            let prefix = nums[j] & mask;
            prefixes.add(prefix);
        }
        let bestCaseXor = ans | (1 << i);
        for (const prefix of prefixes) {
            if (prefixes.has(prefix ^ bestCaseXor)) {
                ans = bestCaseXor;
                break;
            }
        }
    }

    return ans;
};