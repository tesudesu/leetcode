// https://leetcode.com/problems/happy-students/

var countWays = function(nums) {
    let ways = 0;

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) + 1) || 1);
    }

    let unique = new Set(nums);

    unique = [...unique];

    unique.sort((a, b) => a - b);

    if (unique[0] > 0) ways++;

    let length = 0;

    for (let i = 0; i < unique.length; i++) {
        length += map.get(unique[i]);
        if (unique[i] < length) {
            if (i + 1 < unique.length) {
                if (unique[i + 1] > length) {
                    ways++;
                }
            } else {
                ways++;
            }
        }
    }

    return ways;
};