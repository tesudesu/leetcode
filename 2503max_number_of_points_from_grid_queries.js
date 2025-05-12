// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/

var maxPoints = function(grid, queries) {
    let ans = Array(queries.length).fill(0);

    queries = queries.map((e, i) => [e, i]);
    queries.sort((a, b) => a[0] - b[0]);

    let currAns = 0;
    let i = 0;

    const minQueue = new MinPriorityQueue(a => a[0]);
    minQueue.enqueue([grid[0][0],0,0]);

    const visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
    visited[0][0] = true;

    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    while (i < queries.length && minQueue.size() > 0) {
        const [point, x, y] = minQueue.dequeue();
        while (i < queries.length && point >= queries[i][0]) {
            ans[queries[i][1]] = currAns;
            i++;
        }
        currAns++;
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
                if (visited[newX][newY]) continue;
                visited[newX][newY] = true;
                minQueue.enqueue([grid[newX][newY], newX, newY]);
            }
        }
    }

    while (i < queries.length) {
        ans[queries[i][1]] = currAns;
        i++;
    }

    return ans;
};