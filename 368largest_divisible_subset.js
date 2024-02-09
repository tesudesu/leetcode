// https://leetcode.com/problems/largest-divisible-subset/

var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);

    const dp = Array(nums.length).fill();

    for (let i = 0; i < nums.length; i++) {
        dp[i] = [1, i];
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j][0] >= dp[i][0]) {
                dp[i] = [dp[j][0] + 1, j]; 
            }
        }
    }

    let index;
    let max = 0;

    for (let i = 0; i < dp.length; i++) {
        if (dp[i][0] > max) {
            max = dp[i][0];
            index = i;
        }
    }

    let ans = [];

    const used = new Set();

    while (!used.has(index)) {
        used.add(index);
        ans.push(nums[index]);
        index = dp[index][1];
    }

    return ans;
};