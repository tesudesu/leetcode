// https://leetcode.com/problems/n-queens/

var solveNQueens = function(n) {
    let ans = [];

    let board = Array(n).fill().map(() => Array(n).fill(false));

    const checkVertical = (y) => {
        for (let i = 0; i < n; i++) {
            if (board[i][y]) {
                return false;
            }
        }
        return true;
    }

    const checkDiagonal = (x, y) => {
        let xCopy = x;
        let yCopy = y;
        while (xCopy >= 0 && yCopy >= 0) {
            if (board[xCopy][yCopy]) {
                return false;
            }
            xCopy--;
            yCopy--;
        }
        xCopy = x;
        yCopy = y;
        while (xCopy < n && yCopy < n) {
            if (board[xCopy][yCopy]) {
                return false;
            }
            xCopy++;
            yCopy++;
        }
        xCopy = x;
        yCopy = y;
        while (xCopy >= 0 && yCopy < n) {
            if (board[xCopy][yCopy]) {
                return false;
            }
            xCopy--;
            yCopy++;
        }
        xCopy = x;
        yCopy = y;
        while (xCopy < n && yCopy >= 0) {
            if (board[xCopy][yCopy]) {
                return false;
            }
            xCopy++;
            yCopy--;
        }
        return true;
    }

    const backtrack = (piecesRemaining, row) => {
        if (piecesRemaining === 0) {
            let sol = [];
            for (let j = 0; j < n; j++) {
                let currRow = "";
                for (let k = 0; k < n; k++) {
                    if (board[j][k]) {
                        currRow += "Q";
                    } else {
                        currRow += ".";
                    }
                }
                sol.push(currRow);
            }
            ans.push(sol);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (checkVertical(i) && checkDiagonal(row, i)) {
                board[row][i] = true;
                backtrack(piecesRemaining - 1, row + 1);
                board[row][i] = false;
            }
        }
    }

    backtrack(n, 0);

    return ans;
};


var solveNQueens = function(n) {
    let ans = [];

    let board = Array(n).fill().map(() => Array(n).fill(false));

    let placedVertical = new Set();
    let placedDiagonal = new Set();
    let placedAntidiagonal = new Set();

    const backtrack = (piecesRemaining, row) => {
        if (piecesRemaining === 0) {
            let sol = [];
            for (let j = 0; j < n; j++) {
                let currRow = "";
                for (let k = 0; k < n; k++) {
                    if (board[j][k]) {
                        currRow += "Q";
                    } else {
                        currRow += ".";
                    }
                }
                sol.push(currRow);
            }
            ans.push(sol);
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!placedVertical.has(i) && !placedDiagonal.has(row - i) && !placedAntidiagonal.has(row + i)) {
                board[row][i] = true;
                placedVertical.add(i);
                placedDiagonal.add(row - i);
                placedAntidiagonal.add(row + i);
                backtrack(piecesRemaining - 1, row + 1);
                board[row][i] = false;
                placedVertical.delete(i);
                placedDiagonal.delete(row - i);
                placedAntidiagonal.delete(row + i);
            }
        }
    }

    backtrack(n, 0);

    return ans;
};