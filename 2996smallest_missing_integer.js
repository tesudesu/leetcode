// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/

var missingInteger = function(nums) {
    const set = new Set(nums);
    let length = nums.length;
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1) {
            length = i;
            break;
        }
        sum += nums[i];
    }

    while (set.has(sum)) {
        sum++;
    }
    
    return sum;
};