// https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/

var minChanges = function(nums, k) {
    const noChange = Array(k + 1).fill(0);
    const oneChange = Array(k + 1).fill(0);

    for (let i = 0; i < nums.length / 2; i++) {
        const diff = Math.abs(nums[i] - nums[nums.length - 1 - i]);
        noChange[diff]++;
        const min = Math.min(nums[i], nums[nums.length - 1 - i]);
        const max = Math.max(nums[i], nums[nums.length - 1 - i]);
        const maxDiff = diff + Math.max(min, k - max);
        oneChange[maxDiff]++;
    }

    for (let i = oneChange.length - 2; i >= 0; i--) {
        oneChange[i] = oneChange[i] + oneChange[i + 1];
    }

    let ans = Infinity;

    for (let i = 0; i <= k; i++) {
        const pairsNoChange = noChange[i];
        const pairsOneChange = oneChange[i] - pairsNoChange;
        const pairsTwoChanges = nums.length / 2 - pairsNoChange - pairsOneChange;
        ans = Math.min(ans, pairsOneChange + pairsTwoChanges * 2);
    }

    return ans;
};