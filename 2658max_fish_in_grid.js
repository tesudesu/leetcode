// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/

var findMaxFish = function(grid) {
    let ans = 0;

    let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (i, j) => {
        let tot = grid[i][j];
        grid[i][j] = 0;

        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
                if (grid[x][y] > 0) {
                    tot += dfs(x, y);
                }
            }
        }

        return tot;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                ans = Math.max(dfs(i, j), ans);
            }
        }
    }

    return ans;
};