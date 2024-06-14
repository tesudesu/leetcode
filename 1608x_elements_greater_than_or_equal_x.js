// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

var specialArray = function(nums) {
    nums.sort((a, b) => a - b);

    let i = nums.length - 2;

    while (i >= 0) {
        while (nums[i] === nums[i + 1]) {
            i--;
        }

        const numsGreaterOrEqual = nums.length - i - 1;
        if (nums[i] < numsGreaterOrEqual && nums[i + 1] >= numsGreaterOrEqual) {
            return numsGreaterOrEqual;
        }
        i--;
    }

    if (nums[0] >= nums.length) {
        return nums.length;
    }

    return -1;
};


var specialArray = function(nums) {
    const freq = Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        freq[Math.min(nums[i], nums.length)]++;
    }

    let numsGreaterOrEqual = 0;

    for (let i = freq.length - 1; i >= 0; i--) {
        numsGreaterOrEqual += freq[i];
        if (i === numsGreaterOrEqual) {
            return i;
        }
    }

    return -1;
};