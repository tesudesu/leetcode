// https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function(mat) {
    let tot = 0;
    for (let i = 0; i < mat.length; i++) {
        tot += mat[i][i] + mat[i][mat.length-i-1];
        if (i === mat.length-i-1) {
            tot -= mat[i][i];
        }
    }
    return tot;
};