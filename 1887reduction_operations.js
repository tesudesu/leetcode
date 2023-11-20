// https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/

var reductionOperations = function(nums) {
    let tot = 0;

    nums.sort((a, b) => a - b);
    const min = nums[0];

    let step = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            step++;
            tot += step;
        } else if (nums[i] !== min) {
            tot += step;
        }
    }

    return tot;
};