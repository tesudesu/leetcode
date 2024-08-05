// https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/

var countPaths = function(grid) {
    const mod = 1e9 + 7;
    const n = grid.length;
    const m = grid[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const dp = Array(n).fill(m).map(() => Array(m).fill(1));
    const outdegrees = Array(n).fill(m).map(() => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (const [dx, dy] of directions) {
                const newX = i + dx;
                const newY = j + dy;
                if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                    if (grid[newX][newY] > grid[i][j]) {
                        outdegrees[i][j]++;
                    }
                }
            }
        }
    }

    let nodes = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (outdegrees[i][j] === 0) {
                nodes.push([i, j]);
            }
        }
    }

    while (nodes.length > 0) {
        let nextNodes = [];
        for (const [x, y] of nodes) {
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                    if (grid[newX][newY] < grid[x][y]) {
                        dp[newX][newY] = (dp[newX][newY] + dp[x][y]) % mod;
                        outdegrees[newX][newY]--;
                        if (outdegrees[newX][newY] === 0) {
                            nextNodes.push([newX, newY]);
                        }
                    }
                }
            }
        }
        nodes = nextNodes;
    }

    let tot = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            tot = (tot + dp[i][j]) % mod;
        }
    }

    return tot;
};