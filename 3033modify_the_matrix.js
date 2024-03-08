// https://leetcode.com/problems/modify-the-matrix/

var modifiedMatrix = function(matrix) {
    const max = Array(matrix[0].length).fill();
    for (let i = 0; i < matrix[0].length; i++) {
        let colMax = -Infinity;
        for (let j = 0; j < matrix.length; j++) {
            colMax = Math.max(colMax, matrix[j][i])
        }
        max[i] = colMax;
    }

    const ans = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill());
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === -1) {
                ans[i][j] = max[j];
            } else {
                ans[i][j] = matrix[i][j];
            }
        }
    }

    return ans;
};