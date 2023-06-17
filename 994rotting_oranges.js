// https://leetcode.com/problems/rotting-oranges/

var orangesRotting = function(grid) {
    let queue = [];
    let tot = 0;
    let fresh = 0;
    let converted = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    if (fresh === 0) return 0;

    while (queue.length > 0) {
        tot++;
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const curr = queue.pop();
            const x = curr[0];
            const y = curr[1];
            if (x + 1 < grid.length && grid[x+1][y] === 1) {
                grid[x+1][y] = 2;
                queue.unshift([x+1, y]);
                converted++;
            }
            if (x - 1 >= 0 && grid[x-1][y] === 1) {
                grid[x-1][y] = 2;
                queue.unshift([x-1, y]);
                converted++;
            }
            if (y + 1 < grid[0].length && grid[x][y+1] === 1) {
                grid[x][y+1] = 2;
                queue.unshift([x, y+1]);
                converted++;
            }
            if (y - 1 >=0 && grid[x][y-1] === 1) {
                grid[x][y-1] = 2;
                queue.unshift([x, y-1]);
                converted++;
            }
        }
    }

    return fresh === converted ? tot - 1 : -1;
};