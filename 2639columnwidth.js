// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/

var findColumnWidth = function(grid) {
    let ans = [];
    for (let i = 0; i < grid[0].length; i++) {
        let colLengths = [];
        for (let j = 0; j < grid.length; j++) {
            colLengths.push(grid[j][i].toString().length);
        }
        ans.push(Math.max(...colLengths));
    }
    return ans;
};