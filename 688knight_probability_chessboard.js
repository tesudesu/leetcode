// https://leetcode.com/problems/knight-probability-in-chessboard/

var knightProbability = function (n, k, row, column) {
    if (k === 0) return 1;

    let prev = Array(n).fill().map(() => Array(n).fill(0));
    prev[row][column] = 1;

    for (let i = 0; i < k; i++) {
        let curr = Array(n).fill().map(() => Array(n).fill(0));

        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
                if (prev[x][y] > 0) {
                    if (x - 2 >= 0) {
                        if (y - 1 >= 0) {
                            curr[x - 2][y - 1] += (1 / 8) * prev[x][y];
                        }
                        if (y + 1 < n) {
                            curr[x - 2][y + 1] += (1 / 8) * prev[x][y];
                        }
                    }
                    if (x - 1 >= 0) {
                        if (y - 2 >= 0) {
                            curr[x - 1][y - 2] += (1 / 8) * prev[x][y];
                        }
                        if (y + 2 < n) {
                            curr[x - 1][y + 2] += (1 / 8) * prev[x][y];
                        }
                    }
                    if (x + 2 < n) {
                        if (y - 1 >= 0) {
                            curr[x + 2][y - 1] += (1 / 8) * prev[x][y];
                        }
                        if (y + 1 < n) {
                            curr[x + 2][y + 1] += (1 / 8) * prev[x][y];
                        }
                    }
                    if (x + 1 < n) {
                        if (y - 2 >= 0) {
                            curr[x + 1][y - 2] += (1 / 8) * prev[x][y];
                        }
                        if (y + 2 < n) {
                            curr[x + 1][y + 2] += (1 / 8) * prev[x][y];
                        }
                    }
                }
            }
        }

        prev = curr;
    }

    let totalProb = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            totalProb += prev[i][j];
        }
    }

    return totalProb;
};