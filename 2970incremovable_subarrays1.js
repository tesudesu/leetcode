// https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/

var incremovableSubarrayCount = function(nums) {
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        let incBegin = true;
        for (let j = 1; j < i; j++) {
            if (nums[j] <= nums[j - 1]) {
                incBegin = false;
                break;
            }
        }
        if (!incBegin) {
            continue;
        }
        for (let j = i; j < nums.length; j++) {
            if (j + 1 < nums.length && i - 1 >= 0 && nums[j + 1] <= nums[i - 1]) {
                continue;
            }
            let incEnd = true;
            for (let k = j + 2; k < nums.length; k++) {
                if (nums[k] <= nums[k - 1]) {
                    incEnd = false;
                    break;
                }
            }
            if (incEnd) {
                tot++;
            }
        }
    }

    return tot;
};