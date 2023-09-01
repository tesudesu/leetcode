// https://leetcode.com/problems/maximal-square/

var maximalSquare = function(matrix) {
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = Number(matrix[i][j]);
            if (matrix[i][j] === 1 && i - 1 >= 0 && j - 1 >= 0 && matrix[i][j - 1] > 0 && matrix[i - 1][j] > 0 && matrix[i - 1][j - 1] > 0) {
                matrix[i][j] = Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1;
            }

            max = Math.max(max, matrix[i][j]);
        }
    }

    return Math.pow(max, 2);
};