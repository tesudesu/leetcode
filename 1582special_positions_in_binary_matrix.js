// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

var numSpecial = function(mat) {
    let checkedRow = Array(mat.length).fill(false);
    let checkedCol = Array(mat[0].length).fill(false);

    let ans = 0;

    const check = (row, col) => {
        for (let i = 0; i < mat[0].length; i++) {
            if (i === col) continue;
            if (mat[row][i] === 1) return false;
        }
        for (let i = 0; i < mat.length; i++) {
            if (i === row) continue;
            if (mat[i][col] === 1) return false;
        }
        return true;
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                if (!checkedRow[i] && !checkedCol[j]) {
                    if (check(i, j)) {
                        ans++;
                    }
                    checkedRow[i] = true;
                    checkedCol[j] = true;
                }
            }
        }
    }

    return ans;
};


var numSpecial = function(mat) {
    let countRow = Array(mat.length).fill(0);
    let countCol = Array(mat[0].length).fill(0);

    let ans = 0;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            countRow[i] += mat[i][j];
            countCol[j] += mat[i][j];
        }
    }

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1 && countRow[i] === 1 && countCol[j] === 1) {
                ans++;
            }
        }
    }

    return ans;
};