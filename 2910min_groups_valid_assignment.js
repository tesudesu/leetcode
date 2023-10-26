// https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/

var minGroupsForValidAssignment = function(nums) {
    let freq = new Map();
    let minGroup = Infinity;

    for (let i = 0; i < nums.length; i++) {
        freq.set(nums[i], (freq.get(nums[i]) + 1) || 1);
    }

    for (const [num, size] of freq) {
        minGroup = Math.min(minGroup, size);
    }

    let ans = Infinity;

    for (let i = minGroup; i >= 1; i--) {
        let groups = 0;
        let possible = true;
        for (const [num, size] of freq) {
            let most = Math.floor(size / (i + 1));
            let found = false;
            while (most >= 0) {
                let number = size;
                number -= (most * (i + 1));
                if (number % i === 0) {
                    found = true;
                    groups += most + (number / i);
                    break;
                }
                most--;
            }
            if (!found) {
                possible = false;
                break;
            }
        }
        if (possible) return groups;
    }

    return ans;
};