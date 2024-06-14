// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/

var maximumValueSum = function(nums, k, edges) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let changes = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        let change = (nums[i] ^ k) - nums[i];
        changes[i] = change;
    }

    changes.sort((a, b) => b - a);

    for (let i = 1; i < changes.length; i += 2) {
        if (changes[i] + changes[i - 1] > 0) {
            sum += changes[i] + changes[i - 1];
        } else {
            break;
        }
    }

    return sum;
};