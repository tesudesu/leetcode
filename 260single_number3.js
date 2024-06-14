// https://leetcode.com/problems/single-number-iii/

var singleNumber = function(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }

    let diffBit = 0;

    while ((xor & 1) === 0) {
        xor = xor >> 1;
        diffBit++;
    }

    let set1 = 0;
    let set2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let valueAtBit = nums[i] >> diffBit;
        if ((valueAtBit & 1) === 0) {
            set1 ^= nums[i];
        } else {
            set2 ^= nums[i];
        }
    }

    return [set1, set2];
};