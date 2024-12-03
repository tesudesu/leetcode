// https://leetcode.com/problems/longest-square-streak-in-an-array/

var longestSquareStreak = function(nums) {
    const set = new Set(nums);
    let longest = 1;

    for (let i = 0; i < nums.length; i++) {
        let length = 1;
        let num = nums[i];
        while (num < 1e5) {
            num *= num;
            if (set.has(num)) {
                length++;
            } else {
                break;
            }
        }
        longest = Math.max(longest, length);
    }

    if (longest > 1) {
        return longest;
    } else {
        return -1;
    }
};