// https://leetcode.com/problems/minimum-cost-to-equalize-array/description/

var minCostToEqualizeArray = function(nums, cost1, cost2) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    const mod = 1e9 + 7;

    let baseDiff = 0;
    for (let i = 0; i < nums.length; i++) {
        baseDiff += max - nums[i];
    }

    if (cost1 * 2 <= cost2) {
        return (baseDiff * cost1) % mod;
    }

    let ans = Infinity;

    for (let i = max; i <= max * 2; i++) {
        const totDiff = baseDiff + (i - max) * nums.length;
        const diffToMin = i - min;
        const restDiff = totDiff - diffToMin;
        if (diffToMin <= restDiff) {
            if (totDiff % 2 === 0) {
                ans = Math.min(ans, (totDiff / 2) * cost2);
            } else {
                ans = Math.min(ans, Math.floor(totDiff / 2) * cost2 + cost1);
            }
        } else {
            const useCost2 = restDiff * cost2;
            const useCost1 = (diffToMin - restDiff) * cost1;
            ans = Math.min(ans, useCost1 + useCost2);
        }
    }

    return ans % mod;
};