// https://leetcode.com/problems/rearranging-fruits/

var minCost = function(basket1, basket2) {
    const count = new Map();
    let min = Infinity;

    for (const num of basket1) {
        count.set(num, (count.get(num) + 1) || 1);
        min = Math.min(min, num);
    }

    for (const num of basket2) {
        if (!count.has(num)) {
            count.set(num, -1);
        } else {
            count.set(num, count.get(num) - 1);
        }
        min = Math.min(min, num);
    }

    let toSwap = [];

    for (const [fruit, freq] of count) {
        if (freq % 2 !== 0) return -1;
        let swap = Math.abs(freq) / 2;
        for (let i = 0; i < swap; i++) {
            toSwap.push(fruit);
        }
    }

    let tot = 0;

    toSwap.sort((a, b) => a - b);

    for (let i = 0; i < toSwap.length / 2; i++) {
        tot += Math.min(toSwap[i], min * 2);
    }

    return tot;
};