// https://leetcode.com/problems/champagne-tower/

// O(query_row) space

var champagneTower = function(poured, query_row, query_glass) {
    let prev = [poured];

    for (let i = 1; i <= query_row; i++) {
        let curr = Array(i + 1).fill(0);
        for (let j = 0; j < curr.length; j++) {
            if (j === 0 || j === curr.length - 1) {
                curr[j] = (prev[0] - 1) / 2 > 0 ? (prev[0] - 1) / 2 : 0;
            } else {
                const excessLeft = (prev[j - 1] - 1) / 2 > 0 ? (prev[j - 1] - 1) / 2 : 0;
                const excessRight = (prev[j] - 1) / 2 > 0 ? (prev[j] - 1) / 2 : 0;
                curr[j] = excessLeft + excessRight;
            }
        }
        prev = curr;
    }

    return Math.min(1, prev[query_glass]);
};


// O(query_row ^ 2) space

// var champagneTower = function(poured, query_row, query_glass) {
//     let array = Array(query_row + 1).fill().map(() => Array(query_row + 1).fill(0));
//     array[0][0] = poured;

//     for (let i = 1; i <= query_row; i++) {
//         for (let j = 0; j <= i; j++) {
//             if (j === 0 || j === i) {
//                 array[i][j] = (array[i - 1][0] - 1) / 2 > 0 ? (array[i - 1][0] - 1) / 2 : 0;
//             } else {
//                 const excessLeft = (array[i - 1][j - 1] - 1) / 2 > 0 ? (array[i - 1][j - 1] - 1) / 2 : 0;
//                 const excessRight = (array[i - 1][j] - 1) / 2 > 0 ? (array[i - 1][j] - 1) / 2 : 0;
//                 array[i][j] = excessLeft + excessRight;
//             }
//         }
//     }

//     return array[query_row][query_glass] >= 1 ? 1 : array[query_row][query_glass];
// };