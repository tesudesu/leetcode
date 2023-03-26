// https://leetcode.com/problems/toeplitz-matrix/

var isToeplitzMatrix = function(matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] !== matrix[i-1][j-1]) {
                return false;
            }
        }
    }
    return true;
};

// var isToeplitzMatrix = function(matrix) {
//     const m = matrix[0].length;
//     const n = matrix.length;
//     for (let i = 0; i < m-1; i++) {
//         const curr = matrix[0][i];
//         let ind = i+1;
//         for (let j = 1; j < n; j++) {
//             if (ind < m && curr !== matrix[j][ind]) {
//                 return false;
//             }
//             ind++;
//         }
//     }
//     for (let i = 1; i < n-1; i++) {
//         const curr = matrix[i][0];
//         let ind = 1;
//         for (let j = i+1; j < n; j++) {
//             if (ind < m && curr !== matrix[j][ind]) {
//                 return false;
//             }
//             ind++;
//         }
//     }
//     return true;
// };