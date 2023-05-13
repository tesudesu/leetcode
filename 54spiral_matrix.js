// https://leetcode.com/problems/spiral-matrix/

var spiralOrder = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    const ansSize = n * m;
    let ans = [];
    while (ans.length < ansSize) {
        for (let i = 0; i < m; i++) {
            ans.push(matrix[0][i]);
        }
        matrix.shift();
        n--;
        if (ans.length === ansSize) return ans;
        for (let i = 0; i < n; i++) {
            ans.push(matrix[i][m-1]);
            matrix[i].pop();
        }
        m--;
        if (ans.length === ansSize) return ans;
        for (let i = m-1; i >= 0; i--) {
            ans.push(matrix[n-1][i]);
        }
        matrix.pop();
        n--;
        if (ans.length === ansSize) return ans;
        for (let i = n-1; i >= 0; i--) {
            ans.push(matrix[i][0]);
            matrix[i].shift();
        }
        m--;
    }
    return ans;
};