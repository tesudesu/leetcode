// https://leetcode.com/problems/row-with-maximum-ones/

var rowAndMaximumOnes = function(mat) {
    let ans = [0, 0];
    for (let i = 0; i < mat.length; i++) {
        let curr = 0;
        for (let j = 0; j < mat[i].length; j++) {
            curr += mat[i][j];
        }
        if (curr > ans[1]) {
            ans[0] = i;
            ans[1] = curr;
        }
    }
    return ans;
};