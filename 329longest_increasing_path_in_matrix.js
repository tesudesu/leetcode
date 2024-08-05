// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/

var longestIncreasingPath = function (matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    const indegrees = Array(n).fill(m).map(() => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            for (const [dx, dy] of directions) {
                const newX = i + dx;
                const newY = j + dy;
                if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                    if (matrix[newX][newY] < matrix[i][j]) {
                        indegrees[i][j]++;
                    }
                }
            }
        }
    }

    let nodes = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (indegrees[i][j] === 0) {
                nodes.push([i, j]);
            }
        }
    }

    let longest = 0;

    while (nodes.length > 0) {
        let nextNodes = [];
        for (const [x, y] of nodes) {
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
                    if (matrix[newX][newY] > matrix[x][y]) {
                        indegrees[newX][newY]--
                        if (indegrees[newX][newY] === 0) {
                            nextNodes.push([newX, newY]);
                        }
                    }
                }
            }
        }
        longest++;
        nodes = nextNodes;
    }

    return longest === 0 ? 1 : longest;
};