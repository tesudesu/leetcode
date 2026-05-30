// https://leetcode.com/problems/number-of-closed-islands/

var closedIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const visited = Array(m).fill().map(() => Array(n).fill(false));
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const dfs = (x, y) => {
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[x][y] === 0) {
                if (!visited[newX][newY]) {
                    visited[newX][newY] = true;
                    dfs(newX, newY);
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            visited[i][0] = true;
            dfs(i, 0);
        }
        if (grid[i][n - 1] === 0) {
            visited[i][n - 1] = true;
            dfs(i, n - 1);
        }
    }

    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 0) {
            visited[0][i] = true;
            dfs(0, i);
        }
        if (grid[m - 1][i] === 0) {
            visited[m - 1][i] = true;
            dfs(m - 1, i);
        }
    }

    let ans = 0;

    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 0 && !visited[i][j]) {
                visited[i][j] = true;
                dfs(i, j);
                ans++;
            }
        }
    }

    return ans;
};