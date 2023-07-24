// https://leetcode.com/problems/minimum-index-of-a-valid-split/

var minimumIndex = function(nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] + 1) || 1;
    }

    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        seen[curr] = (seen[curr] + 1) || 1;
        const first = seen[curr];
        const remaining = map[curr] - seen[curr];
        if (first * 2 > i + 1 && remaining * 2 > nums.length - i - 1) {
            return i;
        }
    }

    return -1;
};