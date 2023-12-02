// https://leetcode.com/problems/diagonal-traverse/

var findDiagonalOrder = function(mat) {
    let ans = [];
    let reverse = -1;

    for (let i = 0; i < mat.length + mat[0].length - 1; i++) {
        let x = i >= mat.length ? mat.length - 1 : i;
        let y = i < mat.length ? 0 : i - mat.length + 1;

        let temp = [];

        while (x >= 0 && y < mat[0].length) {
            temp.push(mat[x][y]);
            x--;
            y++;
        }

        if (reverse === 1) {
            temp.reverse();
        }

        ans.push(...temp);
        reverse *= -1;
    }

    return ans;
};


// var findDiagonalOrder = function(mat) {
//     let diaSum = new Map();
//     let reverse = -1;

//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < mat[0].length; j++) {
//             if (diaSum.has(i + j)) {
//                 let arr = diaSum.get(i + j);
//                 arr.push(mat[i][j]);
//                 diaSum.set(i + j, arr);
//             } else {
//                 diaSum.set(i + j, [mat[i][j]]);
//             }
//         }
//     }

//     let ans = [];
//     let sum = 0;

//     for (let i = 0; i <= mat.length + mat[0].length - 2; i++) {
//         let curr = diaSum.get(sum);
//         if (reverse === -1) {
//             for (let i = curr.length - 1; i >= 0; i--) {
//                 ans.push(curr[i]);
//             }
//         } else {
//             for (let i = 0; i < curr.length; i++) {
//                 ans.push(curr[i]);
//             }
//         }
//         reverse *= -1;
//         sum++;
//     }

//     return ans;
// };