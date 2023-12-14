// https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/

var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    let longestStreakH = 1;
    let longestStreakV = 1;

    let currStreak = 1;

    for (let i = 1; i < hBars.length; i++) {
        if (hBars[i] === hBars[i - 1] + 1) {
            currStreak++;
        } else {
            longestStreakH = Math.max(longestStreakH, currStreak);
            currStreak = 1;
        }
    }

    longestStreakH = Math.max(longestStreakH, currStreak);

    currStreak = 1;

    for (let i = 1; i < vBars.length; i++) {
        if (vBars[i] === vBars[i - 1] + 1) {
            currStreak++;
        } else {
            longestStreakV = Math.max(longestStreakV, currStreak);
            currStreak = 1;
        }
    }

    longestStreakV = Math.max(longestStreakV, currStreak);

    let maxSide = Math.min(longestStreakH, longestStreakV) + 1;

    return maxSide * maxSide;
};