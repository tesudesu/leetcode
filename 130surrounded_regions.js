// https://leetcode.com/problems/surrounded-regions/

var solve = function (board) {
    let visited = Array(board.length).fill(false).map(() => Array(board[0].length).fill(false));
    let capture = Array(board.length).fill(true).map(() => Array(board[0].length).fill(true));

    let stack = [];

    const findConnected = (i, j) => {
        visited[i][j] = true;
        stack.push([i, j]);
        while (stack.length > 0) {
            const [x, y] = stack.pop();
            capture[x][y] = false;
            if (x - 1 >= 0 && board[x - 1][y] === "O" && !visited[x - 1][y]) {
                visited[x - 1][y] = true;
                stack.push([x - 1, y]);
            }
            if (x + 1 < board.length && board[x + 1][y] === "O" && !visited[x + 1][y]) {
                visited[x + 1][y] = true;
                stack.push([x + 1, y]);
            }
            if (y - 1 >= 0 && board[x][y - 1] === "O" && !visited[x][y - 1]) {
                visited[x][y - 1] = true;
                stack.push([x, y - 1]);
            }
            if (y + 1 < board[0].length && board[x][y + 1] === "O" && !visited[x][y + 1]) {
                visited[x][y + 1] = true;
                stack.push([x, y + 1]);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === "O" && !visited[i][0]) {
            findConnected(i, 0);
        }
        if (board[i][board[0].length - 1] === "O" && !visited[i][board[0].length - 1]) {
            findConnected(i, board[0].length - 1);
        }
    }

    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === "O" && !visited[0][i]) {
            findConnected(0, i);
        }
        if (board[board.length - 1][i] === "O" && !visited[board.length - 1][i]) {
            findConnected(board.length - 1, i);
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "O" && capture[i][j]) {
                board[i][j] = "X";
            }
        }
    }
};