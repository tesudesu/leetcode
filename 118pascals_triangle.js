// https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
    let ans = [[1]];

    for (let i = 0; i < numRows - 1; i++) {
        const last = ans[ans.length - 1];
        let row = Array(last.length + 1);
        for (let j = 0; j < row.length; j++) {
            if (j === 0 || j === row.length - 1) {
                row[j] = last[0];
            } else {
                row[j] = last[j - 1] + last[j];
            }
        }
        ans.push(row);
    }

    return ans;
};