// https://leetcode.com/problems/check-if-array-is-good/

var isGood = function(nums) {
    const max = Math.max(...nums);

    if (nums.length !== max + 1) return false;

    const set = new Set(nums);

    for (let i = 1; i <= max; i++) {
        if (!set.has(i)) return false;
    }

    let once = false;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            if (!once) {
                once = true;
            } else {
                return true;
            }
        }
    }

    return false;
};