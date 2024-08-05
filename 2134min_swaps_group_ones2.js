// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/

var minSwaps = function(nums) {
    let ones = 0;

    for (let i = 0; i < nums.length; i++) {
        ones += nums[i];
    }

    nums = [...nums, ...nums];

    let j = 0;

    let tot = 0;

    while (j < ones) {
        if (nums[j] === 0) {
            tot++;
        }
        j++;
    }

    let i = 0;

    let curr = tot;

    while (j < nums.length) {
        if (nums[j] === 0) {
            curr++;
        }
        if (nums[i] === 0) {
            curr--;
        }
        tot = Math.min(tot, curr);
        i++;
        j++;
    }

    return tot;
};