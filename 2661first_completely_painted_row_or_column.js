// https://leetcode.com/problems/first-completely-painted-row-or-column/

var firstCompleteIndex = function(arr, mat) {
    const coor = new Map();

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            coor.set(mat[i][j], [i, j]);
        }
    }

    let row = Array(mat.length).fill(0);
    let col = Array(mat[0].length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let [x, y] = coor.get(arr[i]);
        row[x]++;
        if (row[x] === mat[0].length) {
            return i;
        }
        col[y]++;
        if (col[y] === mat.length) {
            return i;
        }
    }
};