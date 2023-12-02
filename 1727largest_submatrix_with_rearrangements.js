// https://leetcode.com/problems/largest-submatrix-with-rearrangements/

var largestSubmatrix = function(matrix) {
    let onesEnding = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix[0].length; i++) {
        onesEnding[0][i] = matrix[0][i];
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                onesEnding[i][j] = onesEnding[i - 1][j] + 1;
            }
        }
    }

    let maxArea = 0;

    for (let i = 0; i < matrix.length; i++) {
        onesEnding[i].sort((a, b) => b - a);
        for (let j = 0; j < matrix[0].length; j++) {
            maxArea = Math.max(maxArea, onesEnding[i][j] * (j + 1));
        }
    }

    return maxArea;
};