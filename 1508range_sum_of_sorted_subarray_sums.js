// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/

var rangeSum = function(nums, n, left, right) {
    let sums = [];

    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;
        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];
            sums.push(currSum);
        }
    }

    sums.sort((a, b) => a - b);

    let tot = 0;
    const mod = 1e9 + 7;

    for (let i = left - 1; i <= right - 1; i++) {
        tot = (tot + sums[i]) % mod;
    }

    return tot;
};