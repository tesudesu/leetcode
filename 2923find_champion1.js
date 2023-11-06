// https://leetcode.com/problems/find-champion-i/

var findChampion = function(grid) {
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        let beats = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) beats++;
        }
        if (beats === n - 1) return i;
    }
};