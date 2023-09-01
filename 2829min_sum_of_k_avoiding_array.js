// https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/

var minimumSum = function(n, k) {
    let map = new Map();

    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (k - i === i) continue;
        map.set(k - i, i);
    }

    let tot = 0;

    let num = 1;

    for (let i = 1; i <= n; i++) {
        if (!map.has(num)) {
            tot += num;
        } else {
            i--;
        }
        num++;
    }

    return tot;
};