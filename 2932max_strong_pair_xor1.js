// https://leetcode.com/problems/maximum-strong-pair-xor-i/

var maximumStrongPairXor = function(nums) {
    let maxXOR = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= Math.min(nums[i], nums[j])) {
                maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
            }
        }
    }

    return maxXOR;
};