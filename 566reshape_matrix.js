// https://leetcode.com/problems/reshape-the-matrix/

var matrixReshape = function(mat, r, c) {
    const totalOriginal = mat.length * mat[0].length;
    const totalNew = r * c;
    if (totalNew != totalOriginal) {
        return mat;
    }
    let result = [];
    let currRow = [];
    const matFlat = mat.flat();
    let ind = 0;
    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= c; j++) {
            currRow.push(matFlat[ind]);
            ind++;
        }
        result.push(currRow);
        currRow = [];
    }
    return result;
};