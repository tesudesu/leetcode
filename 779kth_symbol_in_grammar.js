// https://leetcode.com/problems/k-th-symbol-in-grammar/

var kthGrammar = function(n, k) {
    let start = 1;
    let end = Math.pow(2, n - 1);

    let res = 0;

    for (let i = 2; i <= n; i++) {
        const mid = ((end - start + 1) / 2) + start;
        if (k < mid) {
            end = mid - 1;
        } else {
            start = mid;
            if (res === 0) {
                res = 1;
            } else {
                res = 0;
            }
        }
        console.log(i, mid, res)
    }

    return res;
};