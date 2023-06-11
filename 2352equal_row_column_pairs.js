// https://leetcode.com/problems/equal-row-and-column-pairs/

var equalPairs = function(grid) {
    let rows = {};

    for (let i = 0; i < grid.length; i++) {
        const key = grid[i].toString();
        if (rows[key]) {
            rows[key]++;
        } else {
            rows[key] = 1;
        }
    }

    let tot = 0;

    for (let i = 0; i < grid.length; i++) {
        let temp = Array(grid.length);
        for (let j = 0; j < grid.length; j++) {
            temp[j] = grid[j][i];
        }
        tot += rows[temp.toString()] || 0;
    }

    return tot;
};