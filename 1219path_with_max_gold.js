// https://leetcode.com/problems/path-with-maximum-gold/

var getMaximumGold = function(grid) {
    let max = -Infinity;

    const dfs = (i, j, visited, gold) => {
        if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === 0 || visited[i][j]) {
            max = Math.max(max, gold);
            return;
        }

        visited[i][j] = true;

        dfs(i + 1, j, visited, gold + grid[i][j]);
        dfs(i - 1, j, visited, gold + grid[i][j]);
        dfs(i, j + 1, visited, gold + grid[i][j]);
        dfs(i, j - 1, visited, gold + grid[i][j]);

        visited[i][j] = false;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                const visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
                dfs(i, j, visited, 0);
            }
        }
    }

    return max === -Infinity ? 0 : max;
};