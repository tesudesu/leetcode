// https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/

var maxEqualRowsAfterFlips = function(matrix) {
    const map = {};

    for (let i = 0; i < matrix.length; i++) {
        let str1 = [];
        let str2 = [];
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                str1.push("0");
                str2.push("1");
            } else {
                str1.push("1");
                str2.push("0");
            }
        }
        str1 = str1.join("");
        str2 = str2.join("");
        if (map[str1]) {
            map[str1]++;
        } else if (map[str2]) {
            map[str2]++;
        } else {
            map[str1] = 1;
        }
    }

    let max = 0;

    for (const str in map) {
        max = Math.max(max, map[str]);
    }

    return max;
};