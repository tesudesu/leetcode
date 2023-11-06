// https://leetcode.com/problems/the-maze/

const { Queue } = require('@datastructures-js/queue');

var hasPath = function(maze, start, destination) {
    if (start[0] === destination[0] && start[1] === destination[1]) return true;

    const m = maze.length;
    const n = maze[0].length;

    let visited = Array(m).fill().map(() => Array(n).fill(false));
    visited[start[0]][start[1]] = true;
    const queue = new Queue();
    queue.enqueue(start);

    while (queue.size() > 0) {
        const [x, y] = queue.dequeue();
        if (x === destination[0] && y === destination[1]) return true;
        let tempX = x;
        while (tempX >= 0 && maze[tempX][y] === 0) {
            tempX--;
        }
        if (!visited[tempX + 1][y]) {
            queue.enqueue([tempX + 1, y]);
            visited[tempX + 1][y] = true;
        }
        tempX = x;
        while (tempX < m && maze[tempX][y] === 0) {
            tempX++;
        }
        if (!visited[tempX - 1][y]) {
            queue.enqueue([tempX - 1, y]);
            visited[tempX - 1][y] = true;
        }

        let tempY = y;
        while (tempY >= 0 && maze[x][tempY] === 0) {
            tempY--;
        }
        if (!visited[x][tempY + 1]) {
            queue.enqueue([x, tempY + 1]);
            visited[x][tempY + 1] = true;
        }
        tempY = y;
        while (tempY < n && maze[x][tempY] === 0) {
            tempY++;
        }
        if (!visited[x][tempY - 1]) {
            queue.enqueue([x, tempY - 1]);
            visited[x][tempY - 1] = true;
        }
    }

    return false;
};