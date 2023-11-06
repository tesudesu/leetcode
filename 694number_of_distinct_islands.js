// https://leetcode.com/problems/number-of-distinct-islands/

var numDistinctIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let islands = [];
    let visited = Array(m).fill().map(() => Array(n).fill(false));

    const dfs = (x, y, currIsland) => {
        if (x < 0 || y < 0 || x >= m || y >= n) return;
        if (visited[x][y] || grid[x][y] === 0) return;

        currIsland.push([x, y]);

        visited[x][y] = true;

        dfs(x - 1, y, currIsland);
        dfs(x + 1, y, currIsland);
        dfs(x, y - 1, currIsland);
        dfs(x, y + 1, currIsland);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                let currIsland = [];
                dfs(i, j, currIsland);
                islands.push(currIsland);
            }
        }
    }

    let distinctIslands = islands.length;

    for (let i = 0; i < islands.length; i++) {
        if (islands[i] === -1) continue;
        for (let j = i + 1; j < islands.length; j++) {
            if (islands[j].length !== islands[i].length) continue;
            let xDisplace = islands[j][0][0] - islands[i][0][0];
            let yDisplace = islands[j][0][1] - islands[i][0][1];
            let found = true;
            for (let k = 0; k < islands[j].length; k++) {
                if (islands[j][k][0] - xDisplace !== islands[i][k][0]) {
                    found = false;
                    break;
                }
                if (islands[j][k][1] - yDisplace !== islands[i][k][1]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                distinctIslands--;
                islands[j] = -1;
            }
        }
    }

    return distinctIslands;
};