// https://leetcode.com/problems/count-sub-islands/

var countSubIslands = function(grid1, grid2) {
    const n = grid2.length;
    const m = grid2[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const visited = Array(n).fill().map(() => Array(m).fill(false));

    const bfs = (i, j) => {
        const queue = new Queue();
        queue.enqueue([i, j]);
        let ans = grid1[i][j] === 0 ? false : true;
        while (!queue.isEmpty()) {
            const [x, y] = queue.dequeue();
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                    if (grid2[newX][newY] === 0) continue;
                    if (grid1[newX][newY] === 0) {
                        ans = false;
                    }
                    if (!visited[newX][newY]) {
                        queue.enqueue([newX, newY]);
                        visited[newX][newY] = true;
                    }
                }
            }
        }

        return ans;
    }

    let tot = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid2[i][j] === 1 && !visited[i][j]) {
                visited[i][j] = true;
                if (bfs(i, j)) {
                    tot++;
                }
            }
        }
    }

    return tot;
};