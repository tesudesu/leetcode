// https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/

var minOperations = function(nums) {
    let tot = 0;

    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] <= stack[stack.length - 1]) {
            let last = stack.pop();
            if (last > nums[i]) {
                tot++;
            }
        }

        stack.push(nums[i]);
    }

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== 0) {
            tot++;
        }
    }

    return tot;
};