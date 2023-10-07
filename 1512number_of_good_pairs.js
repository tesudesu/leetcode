// https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    let freq = new Map();

    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) + 1) || 1);
    }

    let tot = 0;

    for (const [num, frequency] of freq) {
        tot += (frequency * (frequency - 1)) / 2;
    }

    return tot;
};