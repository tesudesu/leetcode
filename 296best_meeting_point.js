// https://leetcode.com/problems/best-meeting-point/

var minTotalDistance = function(grid) {
    let x = [];
    let y = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                y.push(i);
            }
        }
    }

    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === 1) {
                x.push(i);
            }
        }
    }

    let xMedian = x[Math.floor(x.length / 2)];
    let yMedian = y[Math.floor(y.length / 2)];

    let dist = 0;

    for (let i = 0; i < x.length; i++) {
        dist += Math.abs(x[i] - xMedian);
    }

    for (let i = 0; i < y.length; i++) {
        dist += Math.abs(y[i] - yMedian);
    }

    return dist;
};