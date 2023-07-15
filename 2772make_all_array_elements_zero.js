// https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/

var checkArray = function(nums, k) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < 0) {
            return false;
        } else if (nums[i] === 0) {
            i++;
        } else {
            if (i + k > nums.length) return false;
            let indNext;
            let changed = false;
            const minus = nums[i];
            for (let j = i; j < i + k; j++) {
                nums[j] -= minus;
                if (nums[j] < 0) {
                    return false;
                } else if (nums[j] > 0) {
                    if (!changed) {
                        indNext = j;
                        changed = true;
                    }
                }
            }
            if (!changed) {
                i = i + k;
            } else {
                i = indNext;
            }
        }
    }
    return true;
};