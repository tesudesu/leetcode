// https://leetcode.com/problems/convert-1d-array-into-2d-array/

var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) {
        return [];
    }

    let ans = Array(m).fill().map(() => Array(n).fill());

    let k = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[i][j] = original[k];
            k++;
        }
    }
    
    return ans;
};