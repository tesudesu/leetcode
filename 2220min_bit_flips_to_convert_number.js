// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

var minBitFlips = function(start, goal) {
    let startString = start.toString(2);
    let goalString = goal.toString(2);

    let i = startString.length - 1;
    let j = goalString.length - 1;

    let flips = 0;

    while (i >= 0 && j >= 0) {
        if (startString[i] !== goalString[j]) {
            flips++;
        }
        i--;
        j--;
    }

    while (i >= 0) {
        if (startString[i] === "1") {
            flips++;
        }
        i--;
    }

    while (j >= 0) {
        if (goalString[j] === "1") {
            flips++;
        }
        j--;
    }

    return flips;
};