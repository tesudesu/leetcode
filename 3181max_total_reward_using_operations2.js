// https://leetcode.com/problems/maximum-total-reward-using-operations-ii/

var maxTotalReward = function(rewardValues) {
    rewardValues = new Set(rewardValues);
    rewardValues = [...rewardValues];
    rewardValues.sort((a, b) => a - b);

    let f = 1n;

    for (const val of rewardValues) {
        const mask = (1n << BigInt(val)) - 1n;
        f |= (f & mask) << BigInt(val);
    }

    return f.toString(2).length - 1;
};