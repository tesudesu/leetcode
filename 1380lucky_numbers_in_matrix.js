// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

var luckyNumbers  = function(matrix) {
    let mins = Array(matrix.length).fill();

    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity;
        let row;
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                row = j;
            }
        }
        mins[i] = [min, row];
    }

    let lucky = [];

    for (const [min, row] of mins) {
        let max = min;
        for (let i = 0; i < matrix.length; i++) {
            max = Math.max(matrix[i][row], max);
        }
        if (max === min) {
            lucky.push(max);
        }
    }

    return lucky;
};