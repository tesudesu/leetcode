// https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/description/

var minimumOperationsToMakeKPeriodic = function(word, k) {
    let counts = new Map();

    for (let i = 0; i < word.length; i += k) {
        const str = word.slice(i, i + k);
        counts.set(str, counts.get(str) + 1 || 1);
    }

    let max = 0;

    for (const [str, count] of counts) {
        max = Math.max(max, count);
    }

    return (word.length / k) - max;
};