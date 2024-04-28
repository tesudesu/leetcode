// https://leetcode.com/problems/minimum-falling-path-sum-ii/

var minFallingPathSum = function(grid) {
    const n = grid.length;
    let row = Array(n).fill();
    for (let i = 0; i < n; i++) {
        row[i] = grid[0][i];
    }

    for (let i = 1; i < n; i++) {
        let newRow = Array(n).fill(Infinity);
        for (let j = 0; j < n; j++) {
            let min = Infinity;
            for (let k = 0; k < n; k++) {
                if (j === k) continue;
                min = Math.min(min, row[k]);
            }
            newRow[j] = min + grid[i][j];
        }
        row = newRow;
    }
    
    return Math.min(...row);
};