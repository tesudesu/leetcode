// https://leetcode.com/problems/find-smallest-common-element-in-all-rows/

var smallestCommonElement = function(mat) {
    let count = new Map();
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            count.set(mat[i][j], (count.get(mat[i][j]) + 1) || 1);
        }
    }
    
    let min = Infinity;

    for (const [num, freq] of count) {
        if (freq === mat.length && num < min) {
            min = num;
        } 
    }

    return min === Infinity ? -1 : min;
};


// brute force

var smallestCommonElement = function(mat) {
    for (let i = 0; i < mat[0].length; i++) {
        let ok = true;
        for (let j = 1; j < mat.length; j++) {
            let found = false;
            for (let k = 0; k < mat[0].length; k++) {
                if (mat[j][k] === mat[0][i]) {
                    found = true;
                } else if (mat[j][k] > mat[0][i]) {
                    break;
                }
            }
            if (!found) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return mat[0][i];
        }
    }

    return -1;
};