// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/

var minimumOperations = function(nums) {
    const allUnique = (map) => {
        for (const [num, count] of map) {
            if (count !== 1) {
                return false;
            }
        }
        return true;
    }

    let count = new Map();
    let hasDuplicate = false;

    for (const num of nums) {
        count.set(num, (count.get(num) + 1) || 1);
        if (count.get(num) > 1) {
            hasDuplicate = true;
        }
    }

    if (!hasDuplicate) {
        return 0;
    }

    let tot = 0;

    for (let i = 0; i < nums.length; i += 3) {
        for (let j = i; j < Math.min(i + 3, nums.length); j++) {
            count.set(nums[j], count.get(nums[j]) - 1);
            if (count.get(nums[j]) === 0) {
                count.delete(nums[j]);
            }
        }
        tot++;
        if (allUnique(count)) {
            return tot;
        }
    }

    return tot;
};