// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

var minDominoRotations = function(tops, bottoms) {
    let min = Infinity;
    let option1 = tops[0];
    let option2 = bottoms[0];

    let curr = 0;

    for (let i = 0; i < tops.length; i++) {
        if (tops[i] !== option1) {
            if (bottoms[i] === option1) {
                curr++;
            } else {
                curr = -1;
                break;
            }
        }
    }

    if (curr !== -1) {
        min = Math.min(min, curr);
    }

    curr = 0;

    for (let i = 0; i < tops.length; i++) {
        if (tops[i] !== option2) {
            if (bottoms[i] === option2) {
                curr++;
            } else {
                curr = -1;
                break;
            }
        }
    }

    if (curr !== -1) {
        min = Math.min(min, curr);
    }

    curr = 0;

    for (let i = 0; i < bottoms.length; i++) {
        if (bottoms[i] !== option1) {
            if (tops[i] === option1) {
                curr++;
            } else {
                curr = -1;
                break;
            }
        }
    }

    if (curr !== -1) {
        min = Math.min(min, curr);
    }

    curr = 0;

    for (let i = 0; i < bottoms.length; i++) {
        if (bottoms[i] !== option2) {
            if (tops[i] === option2) {
                curr++;
            } else {
                curr = -1;
                break;
            }
        }
    }

    if (curr !== -1) {
        min = Math.min(min, curr);
    }

    return min === Infinity ? -1 : min;
};