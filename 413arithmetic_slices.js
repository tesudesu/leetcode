// https://leetcode.com/problems/arithmetic-slices/

var numberOfArithmeticSlices = function(nums) {
    const dp = Array(nums.length).fill(0);

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = 1 + dp[i - 1];
        }
    }

    let tot = 0;

    for (let i = 0; i < dp.length; i++) {
        tot += dp[i];
    }

    return tot;
};


var numberOfArithmeticSlices = function(nums) {
    let tot = 0;

    for (let i = 2; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if (nums[i - 1] - nums[i - 2] === diff) {
            tot++;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] - nums[j - 1] === diff) {
                    tot++;
                } else {
                    break;
                }
            }
        }
    }

    return tot;
};