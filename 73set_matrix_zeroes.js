// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] !== 0) matrix[k][j] = null;
                }
                for (let k = 0; k < matrix[0].length; k++) {
                    if (matrix[i][k] !== 0) matrix[i][k] = null;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
};


// O(m+n) space

// var setZeroes = function(matrix) {
//     let horizontal = Array(matrix[0].length).fill(false);
//     let vertical = Array(matrix.length).fill(false);

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === 0) {
//                 horizontal[j] = true;
//                 vertical[i] = true;
//             }
//         }
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         if (vertical[i]) {
//             for (let j = 0; j < matrix[0].length; j++) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     for (let i = 0; i < matrix[0].length; i++) {
//         if (horizontal[i]) {
//             for (let j = 0; j < matrix.length; j++) {
//                 matrix[j][i] = 0;
//             }
//         }
//     }
// };


// O(1) space

// var setZeroes = function(matrix) {
//     let horizontalFirst = false;

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === 0) {
//                 if (i === 0) {
//                     horizontalFirst = true;
//                 } else {
//                     matrix[i][0] = 0;
//                 }
//                 matrix[0][j] = 0;
//             }
//         }
//     }

//     for (let i = 1; i < matrix.length; i++) {
//         if (matrix[i][0] === 0) {
//             for (let j = 1; j < matrix[0].length; j++) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     for (let i = 1; i < matrix[0].length; i++) {
//         if (matrix[0][i] === 0) {
//             for (let j = 1; j < matrix.length; j++) {
//                 matrix[j][i] = 0;
//             }
//         }
//     }
    
//     if (matrix[0][0] === 0) {
//         for (let i = 0; i < matrix.length; i++) {
//             matrix[i][0] = 0;
//         }
//     }

//     if (horizontalFirst) {
//         for (let i = 0; i < matrix[0].length; i++) {
//             matrix[0][i] = 0;
//         }
//     }
// };