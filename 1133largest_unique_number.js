// https://leetcode.com/problems/largest-unique-number/

var largestUniqueNumber = function(nums) {
    const count = new Map();

    for (const num of nums) {
        count.set(num, (count.get(num) + 1) || 1);
    }

    let max = -1;

    for (const [num, freq] of count) {
        if (freq === 1) {
            if (num > max) {
                max = num;
            }
        }
    }

    return max;
};