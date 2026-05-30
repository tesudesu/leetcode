// https://leetcode.com/problems/beautiful-array/

var beautifulArray = function(n) {
    const memo = new Map();

    const helper = (size) => {
        if (memo.has(size)) {
            return memo.get(size);
        }

        if (size === 1) {
            return [1];
        } 

        const oddLength = Math.ceil(size / 2);
        const evenLength = Math.floor(size / 2);

        const oddAns = helper(oddLength).map(e => e * 2 - 1);
        const evenAns = helper(evenLength).map(e => e * 2);

        const res = [...oddAns, ...evenAns];

        memo.set(size, res);

        return res;
    }

    return helper(n);
};