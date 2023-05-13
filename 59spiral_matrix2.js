// https://leetcode.com/problems/spiral-matrix-ii/

var generateMatrix = function (n) {
    let ans = Array(n).fill().map(() => Array(n).fill());
    let top = 0;
    let bottom = n-1;
    let right = n-1;
    let left = 0;
    let curr = 1;
    while (curr <= n*n) {
        for (let i = top; i <= right; i++) {
            ans[top][i] = curr;
            curr++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ans[i][right] = curr;
            curr++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            ans[bottom][i] = curr;
            curr++
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            ans[i][left] = curr;
            curr++;
        }
        left++;
    }
    return ans;
};