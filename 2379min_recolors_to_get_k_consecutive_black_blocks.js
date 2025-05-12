// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

var minimumRecolors = function(blocks, k) {
    let curr = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] === "W") {
            curr++;
        }
    }

    let min = curr;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] === "W") {
            curr++;
        }
        if (blocks[i - k] === "W") {
            curr--;
        }
        min = Math.min(min, curr);
    }

    return min;
};