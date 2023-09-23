// https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/

var minimumMoves = function(grid) {
    let multiples = [];
    let zeroes = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) {
                zeroes.push([i, j]);
            } else if (grid[i][j] > 1) {
                multiples.push([i, j, grid[i][j]]);
            }
        }
    }

    const solve = (index) => {
        if (index === zeroes.length) return 0;

        const [x, y] = zeroes[index];
        let min = Infinity;
        
        for (let i = 0; i < multiples.length; i++) {
            const [x1, y1, stones] = multiples[i];
            if (stones === 1) continue;
            const diff = Math.abs(x1 - x) + Math.abs(y1 - y);
            multiples[i][2]--;
            min = Math.min(min, diff + solve(index + 1));
            multiples[i][2]++;
        }

        return min;
    }

    return solve(0);
};