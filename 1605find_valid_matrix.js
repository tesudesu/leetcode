// https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/

var restoreMatrix = function(rowSum, colSum) {
    const ans = Array(rowSum.length).fill().map(() => Array(colSum.length).fill(0));

    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < ans[0].length; j++) {
            let min = Math.min(rowSum[i], colSum[j]);
            ans[i][j] = min;
            rowSum[i] -= min;
            colSum[j] -= min;
        }
    }

    return ans;
};