// https://leetcode.com/problems/grid-game/

var gridGame = function(grid) {
    const n = grid[0].length;

    const prefixTop = Array(n).fill(0);
    const prefixDown = Array(n).fill(0);
    prefixTop[0] = grid[0][0];
    prefixDown[0] = grid[1][0];

    for (let i = 1; i < n; i++) {
        prefixTop[i] = prefixTop[i - 1] + grid[0][i];
        prefixDown[i] = prefixDown[i - 1] + grid[1][i];
    }

    let min = Infinity;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let top = prefixTop[n - 1] - prefixTop[i];
        let down = i === 0 ? 0 : prefixDown[i - 1];
        let max = Math.max(top, down);
        if (max < min) {
            min = max;
            ans = max;
        }
    }

    return ans;
};