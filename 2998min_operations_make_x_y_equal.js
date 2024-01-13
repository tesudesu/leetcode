// https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/

// DP

var minimumOperationsToMakeEqual = function(x, y) {
    if (y >= x) {
        return y - x;
    }

    const cache = new Map();

    const dp = (num, canAdd) => {
        if (num === y) {
            return 0;
        }

        if (num < y) {
            return y - num;
        }

        if (cache.has(num)) {
            return cache.get(num);
        }

        let divide11 = Infinity;
        let divide5 = Infinity;
        let add1 = Infinity;

        if (num % 11 === 0) {
            divide11 = dp(num / 11, canAdd) + 1;
        }

        if (num % 5 === 0) {
            divide5 = dp(num / 5, canAdd) + 1;
        }

        if (canAdd > 0) {
            add1 = dp(num + 1, canAdd - 1) + 1;
        }

        const minus1 = dp(num - 1, canAdd) + 1;

        cache.set(num, Math.min(divide11, divide5, add1, minus1));

        return cache.get(num);
    }

    return dp(x, x - y);
};


// BFS

const { Queue } = require('@datastructures-js/queue');

var minimumOperationsToMakeEqual = function(x, y) {
    if (y >= x) {
        return y - x;
    }

    const queue = new Queue();
    queue.enqueue(x);

    const visited = new Set();
    visited.add(x);

    let levels = 0;

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const num = queue.dequeue();
            if (num % 11 === 0) {
                const divide11 = num / 11;
                if (divide11 === y) {
                    return levels + 1;
                }
                if (!visited.has(divide11)) {
                    queue.enqueue(divide11);
                    visited.add(divide11);
                }
            }
            if (num % 5 === 0) {
                const divide5 = num / 5;
                if (divide5 === y) {
                    return levels + 1;
                }
                if (!visited.has(divide5)) {
                    queue.enqueue(divide5);
                    visited.add(divide5);
                }
            }
            if (num + 1 === y) {
                return levels + 1;
            }
            if (!visited.has(num + 1)) {
                queue.enqueue(num + 1);
                visited.add(num + 1);
            }
            if (num - 1 === y) {
                return levels + 1;
            }
            if (!visited.has(num - 1)) {
                queue.enqueue(num - 1);
                visited.add(num - 1);
            }
        }
        levels++;
    }
};