// https://leetcode.com/problems/making-a-large-island/

var largestIsland = function(grid) {
    const n = grid.length;
    const islands = Array(n).fill().map(() => Array(n).fill(0));
    const visited = Array(n).fill().map(() => Array(n).fill(false));

    let islandNum = 1;

    const sizes = new Map();

    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    const dfs = (i, j) => {
        let ans = 1;
        visited[i][j] = true;
        islands[i][j] = islandNum;

        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x >= 0 && x < n && y >= 0 && y < n) {
                if (grid[x][y] === 1 && !visited[x][y]) {
                    ans += dfs(x, y);
                }
            }
        }

        return ans;
    }

    const applySize = (i, j, size) => {
        sizes[i][j] = size;
        for (let [dx, dy] of directions) {
            let x = i + dx;
            let y = j + dy;
            if (x >= 0 && x < n && y >= 0 && y < n) {
                if (grid[x][y] === 1) {
                    grid[x][y] = size;
                    applySize(x, y, size);
                }
            }
        }
        return;
    }

    let maxIndividualSize = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0 || visited[i][j]) continue;
            islandNum++;
            let size = dfs(i, j);
            maxIndividualSize = Math.max(maxIndividualSize, size);
            sizes.set(islandNum, size);
        }
    }

    let max = maxIndividualSize;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let curr = 1;
                let counted = new Set();
                for (let [dx, dy] of directions) {
                    let x = i + dx;
                    let y = j + dy;
                    if (x >= 0 && x < n && y >= 0 && y < n) {
                        if (islands[x][y] > 1 && !counted.has(islands[x][y])) {
                            counted.add(islands[x][y]);
                            curr += sizes.get(islands[x][y])
                        }
                    }
                }
                max = Math.max(max, curr);
            }
        }
    }

    return max;
};