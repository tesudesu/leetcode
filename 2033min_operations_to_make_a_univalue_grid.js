// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/

var minOperations = function(grid, x) {
    let elements = [];
    const remainders = new Set();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            elements.push(grid[i][j]);
            remainders.add(grid[i][j] % x);
        }
    }

    if (remainders.size !== 1) {
        return -1;
    }

    elements.sort((a, b) => a - b);

    let min = 0;
    let max = elements.length - 1;

    while (min < max) {
        min++;
        max--;
    }

    let tot = 0;

    for (let i = 0; i < elements.length; i++) {
        tot += (Math.abs(elements[i] - elements[min])) / x;
    }

    return tot;
};