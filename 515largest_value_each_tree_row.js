//https://leetcode.com/problems/find-largest-value-in-each-tree-row/ 

var largestValues = function (root) {
    if (!root) return [];

    let res = [];

    let row = [root];

    while (row.length > 0) {
        const length = row.length;
        let newRow = [];
        let prevRowMax = -Infinity;
        for (let i = 0; i < length; i++) {
            const curr = row.pop();
            prevRowMax = Math.max(prevRowMax, curr.val);
            if (curr.left) {
                newRow.push(curr.left);
            }
            if (curr.right) {
                newRow.push(curr.right);
            }
        }
        res.push(prevRowMax);
        row = newRow;
    }

    return res;
};