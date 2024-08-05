// https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/

var minNumberOperations = function(target) {
    let tot = target[0];
    let bar = target[0];

    for (let i = 1; i < target.length; i++) {
        if (target[i] > target[i - 1]) {
            tot += target[i] - target[i - 1];
        }
        bar = target[i];
    }

    return tot;
};