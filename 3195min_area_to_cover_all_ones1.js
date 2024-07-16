// https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/

var minimumArea = function(grid) {
    let xMin = grid.length - 1;
    let xMax = 0;
    let yMin = grid[0].length - 1;
    let yMax = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                xMin = Math.min(i, xMin);
                xMax = Math.max(i, xMax);
                yMin = Math.min(j, yMin);
                yMax = Math.max(j, yMax);
            }
        }
    }

    return (xMax - xMin + 1) * (yMax - yMin + 1);
};