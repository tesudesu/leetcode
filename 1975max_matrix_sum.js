// https://leetcode.com/problems/maximum-matrix-sum/

var maxMatrixSum = function(matrix) {
    let negatives = 0;
    let tot = 0;
    let min = Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] <= 0) {
                negatives++;
            }
            min = Math.min(min, Math.abs(matrix[i][j]))
            tot += Math.abs(matrix[i][j]);
        }
    }

    if (negatives % 2 === 0) {
        return tot;
    }

    return tot - min - min;
};