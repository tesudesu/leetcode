// https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/

var minimumOperations = function(nums, target) {
    const diff = Array(nums.length).fill();
    for (let i = 0; i < target.length; i++) {
        diff[i] = target[i] - nums[i];
    }

    let tot = Math.abs(diff[0]);
    let bar = diff[0];

    for (let i = 1; i < diff.length; i++) {
        if (diff[i] > 0 && diff[i - 1] > 0 || diff[i] < 0 && diff[i - 1] < 0) {
            const curr = Math.abs(diff[i]);
            const prev = Math.abs(diff[i - 1]);
            if (curr > prev) {
                tot += curr - prev;
            }
            bar = curr;
        } else {
            bar = Math.abs(diff[i]);
            tot += bar;
        }
    }

    return tot;
};