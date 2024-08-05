// https://leetcode.com/problems/sort-array-by-increasing-frequency/

var frequencySort = function(nums) {
    const counts = new Map();
    for (const num of nums) {
        counts.set(num, (counts.get(num) + 1) || 1);
    }

    nums.sort((a, b) => {
        if (counts.get(a) < counts.get(b)) {
            return -1;
        } else if (counts.get(a) > counts.get(b)) {
            return 1;
        } else {
            return b - a;
        }
    });

    return nums;
};