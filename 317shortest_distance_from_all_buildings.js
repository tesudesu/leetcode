// https://leetcode.com/problems/shortest-distance-from-all-buildings/

var shortestDistance = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let ones = 0;

    const count = Array(n).fill().map(() => Array(m).fill(0));
    const sum = Array(n).fill().map(() => Array(m).fill(0));

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const bfs = (queue, visited) => {
        let distance = 0;
        while (queue.size() > 0) {
            const length = queue.size();
            for (let i = 0; i < length; i++) {
                const [x, y] = queue.dequeue();
                sum[x][y] += distance;
                count[x][y]++;

                for (const [dx, dy] of directions) {
                    const newX = x + dx;
                    const newY = y + dy;
                    if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                        if (grid[newX][newY] === 0 && !visited[newX][newY]) {
                            queue.enqueue([newX, newY]);
                            visited[newX][newY] = true;
                        }
                    }
                }
            }
            distance++;
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                ones++;
                const visited = Array(n).fill().map(() => Array(m).fill(0));
                const queue = new Queue();
                queue.enqueue([i, j]);
                bfs(queue, visited);
            }
        }
    }

    let min = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0 && sum[i][j] > 0 && count[i][j] === ones) {
                min = Math.min(min, sum[i][j]);
            }
        }
    }

    return min === Infinity ? -1 : min;
};