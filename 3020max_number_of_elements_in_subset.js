// https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/

var maximumLength = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) + 1) || 1);
    }

    let max = 1;
    if (map.has(1)) {
        const count = map.get(1);
        if (count % 2 === 0) {
            max = count - 1;
        } else {
            max = count;
        }
    }

    for (const [val, count] of map) {
        if (val === 1) continue;

        let num = val;
        let sets = 0;
        while (map.get(num) >= 2) {
            sets++;
            num *= num;
        }
        if (map.has(num)) {
            max = Math.max(max, sets * 2 + 1);
        } else {
            max = Math.max(max, (sets - 1) * 2 + 1);
        }
    }

    return max;
};