// https://leetcode.com/problems/max-area-of-island/

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    const n = grid.length;
    const m = grid[0].length;

    let visited = Array(n).fill().map(() => Array(m).fill(false));

    const dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= n || y >= m) return 0;
        if (visited[x][y]) return 0;
        if (grid[x][y] !== 1) return 0;

        visited[x][y] = true;
        return 1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                maxArea = Math.max(maxArea, dfs(i, j));
            }
        }
    }

    return maxArea;
};