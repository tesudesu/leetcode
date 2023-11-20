// https://leetcode.com/problems/range-sum-query-2d-immutable/

var NumMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    this.prefixSums = Array(m).fill().map(() => Array(n).fill());

    // horizontal calculation
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                this.prefixSums[i][j] = matrix[i][j];
            } else {
                this.prefixSums[i][j] = matrix[i][j] + this.prefixSums[i][j - 1];
            }
        }
    }

    // add vertical calculation
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < m; j++) {
            this.prefixSums[j][i] = this.prefixSums[j][i] + this.prefixSums[j - 1][i];
        }
    }
};


NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let tot = this.prefixSums[row2][col2];
    let upperCorner = 0;
    let upper = 0;
    let left = 0;
    if (row1 - 1 >= 0 && col1 - 1 >= 0) {
        upperCorner = this.prefixSums[row1 - 1][col1 - 1];
        upper = this.prefixSums[row1 - 1][col2];
        left = this.prefixSums[row2][col1 - 1];
    } else if (row1 - 1 >= 0) {
        upper = this.prefixSums[row1 - 1][col2];
    } else if (col1 - 1 >= 0) {
        left = this.prefixSums[row2][col1 - 1];
    }
    return tot - upper - left + upperCorner;
};