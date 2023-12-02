// https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/

var areSimilar = function(mat, k) {
    k = k % mat[0].length;

    for (let i = 0; i < mat[0].length; i++) {
        let convertedIndex;
        if (i % 2 === 0) {
            convertedIndex = (i - k + mat[0].length) % mat[0].length;
        } else {
            convertedIndex = (i + k) % mat[0].length;
        }
        for (let j = 0; j < mat.length; j++) {
            if (mat[j][i] !== mat[j][convertedIndex]) return false;
        }
    }

    return true;
};