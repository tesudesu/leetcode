// https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/

var minimumPossibleSum = function(n, target) {
    let avoid = new Set();

    for (let i = target - 1; i >= Math.ceil(target / 2); i--) {
        if (i === target - i) continue;
        avoid.add(i);
    }

    let sum = 0;

    let curr = 1;

    for (let i = 0; i < n; i++) {
        while (avoid.has(curr)) {
            curr++;
        }
        sum += curr++;
    }

    return sum;
};