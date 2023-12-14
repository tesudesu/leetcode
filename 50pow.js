// https://leetcode.com/problems/powx-n/

var myPow = function (x, n) {
    if (x === 0) return 0;

    const helper = (x, n) => {
        if (n === 0) return 1;

        let odd = false;
        if (n % 2 !== 0) odd = true;

        const res = helper(x, Math.floor(n / 2));
        if (odd) {
            return res * res * x;
        } else {
            return res * res;
        }
    }

    const res = helper(x, Math.abs(n));

    return n >= 0 ? res : 1 / res;
};