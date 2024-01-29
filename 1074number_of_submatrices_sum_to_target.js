// https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/

// O((mn)^2) time

var numSubmatrixSumTarget = function(matrix, target) {
    const prefixMatrix = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill());

    for (let i = 0; i < prefixMatrix.length; i++) {
        for (let j = 0; j < prefixMatrix[0].length; j++) {
            prefixMatrix[i][j] = matrix[i][j] + (i - 1 >= 0 ? prefixMatrix[i - 1][j] : 0) + (j - 1 >= 0 ? prefixMatrix[i][j - 1] : 0) - (i - 1 >= 0 && j - 1 >= 0 ? prefixMatrix[i - 1][j - 1] : 0);
        }
    }

    let tot = 0;

    for (let i = 0; i < prefixMatrix.length; i++) {
        for (let j = 0; j < prefixMatrix[0].length; j++) {

            for (let p = i; p < prefixMatrix.length; p++) {
                for (let q = j; q < prefixMatrix[0].length; q++) {
                    const curr = prefixMatrix[p][q] - (i - 1 >= 0 ? prefixMatrix[i - 1][q] : 0) - (j - 1 >= 0 ? prefixMatrix[p][j - 1] : 0) + (i - 1 >= 0 && j - 1 >= 0 ? prefixMatrix[i - 1][j - 1] : 0);
                    if (curr === target) {
                        tot++;
                    }
                }
            }
        }
    }

    return tot;
};


// O(nm^2) time

var numSubmatrixSumTarget = function(matrix, target) {
    const prefixMatrix = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill());

    for (let i = 0; i < prefixMatrix.length; i++) {
        for (let j = 0; j < prefixMatrix[0].length; j++) {
            prefixMatrix[i][j] = matrix[i][j] + (i - 1 >= 0 ? prefixMatrix[i - 1][j] : 0) + (j - 1 >= 0 ? prefixMatrix[i][j - 1] : 0) - (i - 1 >= 0 && j - 1 >= 0 ? prefixMatrix[i - 1][j - 1] : 0);
        }
    }

    let tot = 0;

    for (let i = 0; i < prefixMatrix.length; i++) {
        
        for (let p = i; p < prefixMatrix.length; p++) {
            const map = new Map();
            map.set(0, 1);
            for (let q = 0; q < prefixMatrix[0].length; q++) {
                const currSum = prefixMatrix[p][q] - (i - 1 >= 0 ? prefixMatrix[i - 1][q] : 0);
                if (map.has(currSum - target)) {
                    tot += map.get(currSum - target);
                }
                map.set(currSum, (map.get(currSum) + 1) || 1);
            }
        }
    }

    return tot;
};