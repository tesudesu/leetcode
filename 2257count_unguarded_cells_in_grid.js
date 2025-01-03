// https://leetcode.com/problems/count-unguarded-cells-in-the-grid/

var countUnguarded = function(m, n, guards, walls) {
    const visited = Array(m).fill().map(() => Array(n).fill(0));

    for (const [x, y] of walls) {
        visited[x][y] = -1;
    }

    for (const [x, y] of guards) {
        visited[x][y] = -1;
    }

    const bfs = (i, j) => {
        // up

        let x = i;
        let y = j;

        while (x - 1 >= 0 && visited[x - 1][y] !== -1) {
            visited[x - 1][y] = 1;
            x--;
        }

        // down

        x = i;
        y = j;

        while (x + 1 < m && visited[x + 1][y] !== -1) {
            visited[x + 1][y] = 1;
            x++;
        }

        // left

        x = i;
        y = j

        while (y - 1 >= 0 && visited[x][y - 1] !== -1) {
            visited[x][y - 1] = 1;
            y--;
        }

        // right

        x = i;
        y = j;

        while (y + 1 < n && visited[x][y + 1] !== -1) {
            visited[x][y + 1] = 1;
            y++;
        }
    }

    for (const [i, j] of guards) {
        bfs(i, j);
    }

    let tot = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (visited[i][j] === 0) {
                tot++;
            }
        }
    }

    return tot;
};