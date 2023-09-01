// https://leetcode.com/problems/01-matrix/

var updateMatrix = function(mat) {
    const queue = new Queue();

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.enqueue([i, j]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const [x, y] = queue.dequeue();
            if (x - 1 >= 0 && mat[x - 1][y] > mat[x][y]) {
                mat[x - 1][y] = mat[x][y] + 1;
                queue.enqueue([x - 1, y]);
            }
            if (x + 1 < mat.length && mat[x + 1][y] > mat[x][y]) {
                mat[x + 1][y] = mat[x][y] + 1;
                queue.enqueue([x + 1, y]);
            }
            if (y - 1 >= 0 && mat[x][y - 1] > mat[x][y]) {
                mat[x][y - 1] = mat[x][y] + 1;
                queue.enqueue([x, y - 1]);
            }
            if (y + 1 < mat[0].length && mat[x][y + 1] > mat[x][y]) {
                mat[x][y + 1] = mat[x][y] + 1;
                queue.enqueue([x, y + 1]);
            }
        }
    }

    return mat;
};