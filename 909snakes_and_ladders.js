// https://leetcode.com/problems/snakes-and-ladders/

var snakesAndLadders = function(board) {
    board.reverse();
    for (let i = 1; i < board.length; i += 2) {
        board[i].reverse();
    }

    let n = board.length;
    let destination = n * n - 1;
    const visited = Array(n).fill().map(() => Array(n).fill(false));
    visited[0][0] = true;

    const queue = new Queue();
    queue.enqueue(0);
    let steps = 0;

    while (queue.size() > 0) {
        let length = queue.size();
        for (let i = 0; i < length; i++) {
            let square = queue.dequeue();
            if (square === destination) {
                return steps;
            }
            for (let i = 1; i <= 6; i++) {
                let nextSquare = square + i;
                if (nextSquare > destination) break;
                let x = Math.floor(nextSquare / n);
                let y = nextSquare % n;
                if (visited[x][y]) continue;
                visited[x][y] = true;
                if (board[x][y] !== -1) {
                    queue.enqueue(board[x][y] - 1);
                } else {
                    queue.enqueue(nextSquare);
                }
            }
        }
        steps++;
    }

    return -1;
};