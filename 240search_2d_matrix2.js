// https://leetcode.com/problems/search-a-2d-matrix-ii/

var searchMatrix = function(matrix, target) {
    let x = 0;
    let y = matrix[0].length - 1;

    while (x < matrix.length && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        } else if (target > matrix[x][y]) {
            x++;
        } else {
            y--;
        }
    }

    return false;
};


// var searchMatrix = function(matrix, target) {
//     let start = 0; 
//     let end = matrix[0].length - 1;
//     let level = 0;

//     while (level < matrix.length) {
//         while (start <= end) {
//             const mid = Math.floor((end - start) / 2) + start;
    
//             if (matrix[level][mid] === target) {
//                 return true;
//             } else if (matrix[level][mid] < target) {
//                 start = mid + 1;
//             } else {
//                 end = mid - 1;
//             }
//         }
//         start = 0;
//         level++;
//     }

//     return false;
// };