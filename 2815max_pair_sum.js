// https://leetcode.com/problems/max-pair-sum-in-an-array/

var maxSum = function(nums) {
    let max = -1;

    const findMaxDigit = (num) => {
        let maxDigit = 0;
        while (num > 0) {
            maxDigit = Math.max(maxDigit, num % 10);
            num = Math.floor(num / 10);
        }
        return maxDigit;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        let maxDigit = findMaxDigit(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            if (findMaxDigit(nums[j]) === maxDigit) {
                max = Math.max(max, nums[i] + nums[j]);
            }
        }
    }

    return max;
};