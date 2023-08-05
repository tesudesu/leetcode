// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    let ind = matrix.length - 1;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let curr;
            if (Array.isArray(matrix[i][j])) {
                curr = matrix[i][j][0];
            } else {
                curr = matrix[i][j];
            }
            matrix[j][ind] = [matrix[j][ind], curr];
        }
        ind--;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = matrix[i][j][1];
        }
    }
};


// var rotate = function(matrix) {
//     let start = 1;
//     for (let i = 0; i < matrix.length - 1; i++) {
//         for (let j = start; j < matrix[0].length; j++) {
//             const temp = matrix[j][i];
//             matrix[j][i] = matrix[i][j];
//             matrix[i][j] = temp;
//         } 
//         start++;
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < Math.floor(matrix[0].length / 2); j++) {
//             const temp = matrix[i][j];
//             matrix[i][j] = matrix[i][matrix[0].length - 1 - j];
//             matrix[i][matrix[0].length - 1 - j] = temp;
//         }
//     }
// };


// var rotate = function (matrix) {
//     let left = 0;
//     let right = matrix.length - 1;
//     let top = 0;
//     let bottom = matrix.length - 1;

//     while (left < right) {
//         for (let i = 0; i < right - left; i++) {
//             const temp = matrix[top][left + i];
//             matrix[top][left + i] = matrix[bottom - i][left];
//             matrix[bottom - i][left] = matrix[bottom][right - i];
//             matrix[bottom][right - i] = matrix[top + i][right];
//             matrix[top + i][right] = temp;
//         }

//         left++;
//         right--;
//         top++;
//         bottom--;
//     }
// };