// https://leetcode.com/problems/find-missing-and-repeated-values/

var findMissingAndRepeatedValues = function(grid) {
    let values = [];
    let set = new Set();
    let n = grid.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            values.push(grid[i][j]);
            set.add(grid[i][j]);
        }
    }

    values.sort((a, b) => a - b);

    let ans = [];

    for (let i = 1; i < values.length; i++) {
        if (values[i] === values[i - 1]) {
            ans.push(values[i]);
            break;
        }
    }

    let curr = 1;

    while (curr <= n * n) {
        if (!set.has(curr)) {
            ans.push(curr);
            break;
        }
        curr++;
    }

    return ans;
};