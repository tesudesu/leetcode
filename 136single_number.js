// https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        if ((nums[i] ^ nums[i + 1]) !== 0) {
            return nums[i];
        }
    }

    return nums[nums.length - 1];
};