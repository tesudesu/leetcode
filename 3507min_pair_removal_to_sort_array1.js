// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/

var minimumPairRemoval = function(nums) {
    const isNonDecreasing = () => {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) return false;
        }
        return true;
    }

    let tot = 0;

    while (!isNonDecreasing()) {
        let minSum = Infinity;
        let minSumIndex;

        for (let i = 1; i < nums.length; i++) {
            let sum = nums[i] + nums[i - 1];
            if (sum < minSum) {
                minSum = sum;
                minSumIndex = i - 1;
            }
        }

        nums.splice(minSumIndex, 2, minSum);
        tot++;
    }

    return tot;
};