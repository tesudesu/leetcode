// https://leetcode.com/problems/transpose-matrix/

var transpose = function(matrix) {
    let ans = Array(matrix[0].length).fill(0).map(item => Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            ans[j][i] = matrix[i][j];
        } 
    }

    return ans;
};

// var transpose = function(matrix) {
//     let transposed = [];
//     for (let i = 0; i < matrix[0].length; i++) {
//         let row = [];
//         for (let j = 0; j < matrix.length; j++) {
//             row.push(matrix[j][i]);
//         }
//         transposed.push(row);
//     }
//     return transposed;
// };