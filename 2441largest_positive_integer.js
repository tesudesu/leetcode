// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

var findMaxK = function(nums) {
    const set = new Set(nums);

    let max = -1;

    for (const num of nums) {
        const ab = Math.abs(num);
        if (ab > max && set.has(num * -1)) {
            max = ab;
        }
        set.add(num);
    }

    return max;
};


var findMaxK = function(nums) {
    const set = new Set(nums);

    let max = -1;

    for (const num of nums) {
        if (num > 0 && num > max && set.has(num * -1)) {
            max = num;
        } 
    }

    return max;
};