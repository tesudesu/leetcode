// https://leetcode.com/problems/n-queens-ii/

var totalNQueens = function(n) {
    let downDiagonal = new Set();
    let upDiagonal = new Set();
    let col = Array(n).fill(false);

    let tot = 0;

    const bt = (level) => {
        if (level === n) {
            tot++;
            return;
        }

        for (let i = 0; i < n; i++) {
            let downDiagonalValue = level - i;
            let upDiagonalValue = level + i;

            if (col[i] || downDiagonal.has(downDiagonalValue) || upDiagonal.has(upDiagonalValue)) {
                continue;
            }

            col[i] = true;
            downDiagonal.add(downDiagonalValue);
            upDiagonal.add(upDiagonalValue);

            bt(level + 1);

            col[i] = false;
            downDiagonal.delete(downDiagonalValue);
            upDiagonal.delete(upDiagonalValue);
        }
    }

    bt(0);

    return tot;
};