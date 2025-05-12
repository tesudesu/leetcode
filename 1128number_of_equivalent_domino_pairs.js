// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

var numEquivDominoPairs = function(dominoes) {
    const hash = (a, b) => {
        return ((a + b) * (a * b + 1)) >>> 0;
    }

    const count = new Map();

    for (const [a, b] of dominoes) {
        const val = hash(a, b);
        count.set(val, (count.get(val) + 1) || 1);
    }

    let tot = 0;

    for (const [num, freq] of count) {
        for (let i = freq - 1; i >= 1; i--) {
            tot += i; 
        }
    }

    return tot;
};