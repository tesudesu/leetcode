// https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/

var minimumOperationsToWriteY = function(grid) {
    const n = grid.length;
    const mid = Math.floor(n / 2);
    const yFreq = new Map();
    const otherFreq = new Map();
    let totY = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            otherFreq.set(grid[i][j], (otherFreq.get(grid[i][j]) + 1) || 1);
        }
    }

    for (let i = 0; i < mid; i++) {
        yFreq.set(grid[i][i], (yFreq.get(grid[i][i]) + 1) || 1);
        otherFreq.set(grid[i][i], otherFreq.get(grid[i][i]) - 1);
        totY++;
    }

    for (let i = n - 1; i > mid; i--) {
        yFreq.set(grid[n - i - 1][i], (yFreq.get(grid[n - i - 1][i]) + 1) || 1);
        otherFreq.set(grid[n - i - 1][i], otherFreq.get(grid[n - i - 1][i]) - 1);
        totY++;
    }

    for (let i = mid; i < n; i++) {
        yFreq.set(grid[i][mid], (yFreq.get(grid[i][mid]) + 1) || 1);
        otherFreq.set(grid[i][mid], otherFreq.get(grid[i][mid]) - 1);
        totY++;
    }

    let otherFreqCounts = [...otherFreq];
    let yFreqCounts = [...yFreq];

    let min = Infinity;

    for (let i = 0; i < otherFreqCounts.length; i++) {
        const [otherNum, otherCount] = otherFreqCounts[i];
        for (let j = 0; j < yFreqCounts.length; j++) {
            const [yNum, yCount] = yFreqCounts[j];
            if (otherNum === yNum) continue;
            min = Math.min(min, totY - yCount + n * n - totY - otherCount);
        }
    }

    return min === Infinity ? totY : min;
};