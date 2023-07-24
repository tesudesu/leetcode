// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        const horizontal = new Set();
        const vertical = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                if (horizontal.has(board[i][j])) {
                    return false;
                } else {
                    horizontal.add(board[i][j]);
                }
            }

            if (board[j][i] !== '.') {
                if (vertical.has(board[j][i])) {
                    return false;
                } else {
                    vertical.add(board[j][i]);
                }
            }
        }
    }

    for (let q = 0; q <= 6; q += 3) {  
        for (let k = 0; k <= 6; k += 3) {
            const box = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[i + q][j + k] !== '.') {
                        if (box.has(board[i + q][j + k])) {
                            return false;
                        } else {
                            box.add(board[i + q][j + k]);
                        }
                    }
                }
            }
        }
    }

    return true;
};