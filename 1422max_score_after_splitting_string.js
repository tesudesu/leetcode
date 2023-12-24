// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

// One pass

var maxScore = function(s) {
    let zeros = 0;
    let ones = 0;
    let bestDiff = -Infinity;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            zeros++;
        } else {
            ones++;
        }

        bestDiff = Math.max(bestDiff, zeros - ones);
    }

    if (s[s.length - 1] === "1") {
        ones++;
    }

    return bestDiff + ones;
};


var maxScore = function(s) {
    let countOnes = Array(s.length).fill(0);

    for (let i = s.length - 1; i >= 1; i--) {
        if (s[i] === "1") {
            countOnes[i - 1] = countOnes[i] + 1;
        } else {
            countOnes[i - 1] = countOnes[i];
        }
    }

    let max = 0;
    let countZero = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "0") {
            countZero++;
        }
        max = Math.max(max, countZero + countOnes[i]);
    }

    return max;
};