// https://leetcode.com/problems/word-search/

var exist = function(board, word) {
    const visited = Array(board.length).fill().map(() => Array(board[0].length).fill(false));

    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true;
        }

        if (i < 0 || j < 0 || i === board.length || j === board[0].length) {
            return false;
        }

        if (board[i][j] !== word[k] || visited[i][j]) {
            return false;
        }

        visited[i][j] = true;

        let res = backtrack(i - 1, j, k + 1) || backtrack(i + 1, j, k + 1) || backtrack(i, j - 1, k + 1) || backtrack(i, j + 1, k + 1);

        visited[i][j] = false;
        
        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};


// var exist = function (board, word) {
//     let found = false;

//     const backtrack = (i, j, been, ind) => {
//         if (ind === word.length) {
//             found = true;
//             return;
//         }

//         if (i - 1 >= 0 && board[i - 1][j] === word[ind] && !been.has(`${i - 1},${j}`)) {
//             been.add(`${i - 1},${j}`);
//             backtrack(i - 1, j, been, ind + 1);
//             been.delete(`${i - 1},${j}`);
//         }

//         if (!found && i + 1 < board.length && board[i + 1][j] === word[ind] && !been.has(`${i + 1},${j}`)) {
//             been.add(`${i + 1},${j}`);
//             backtrack(i + 1, j, been, ind + 1);
//             been.delete(`${i + 1},${j}`);
//         }

//         if (!found && j - 1 >= 0 && board[i][j - 1] === word[ind] && !been.has(`${i},${j - 1}`)) {
//             been.add(`${i},${j - 1}`);
//             backtrack(i, j - 1, been, ind + 1);
//             been.delete(`${i},${j - 1}`);
//         }

//         if (!found && j + 1 < board[0].length && board[i][j + 1] === word[ind] && !been.has(`${i},${j + 1}`)) {
//             been.add(`${i},${j + 1}`);
//             backtrack(i, j + 1, been, ind + 1);
//             been.delete(`${i},${j + 1}`);
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (board[i][j] === word[0]) {
//                 let been = new Set();
//                 been.add(`${i},${j}`);
//                 backtrack(i, j, been, 1);
//                 if (found) return true;
//             }
//         }
//     }

//     return false;
// };


// var exist = function(board, word) {
//     let found = false;

//     const backtrack = (arr, i, j, been, ind) => {
//         if (arr.join("") === word) {
//             found = true;
//             return;
//         }

//         if (i - 1 >= 0 && board[i - 1][j] === word[ind] && !been.has(`${i - 1},${j}`)) {
//             been.add(`${i - 1},${j}`);
//             arr.push(board[i - 1][j]);
//             backtrack(arr, i - 1, j, been, ind + 1);
//             arr.pop();
//             been.delete(`${i - 1},${j}`);
//         }

//         if (i + 1 < board.length && board[i + 1][j] === word[ind] && !been.has(`${i + 1},${j}`)) {
//             been.add(`${i + 1},${j}`);
//             arr.push(board[i + 1][j]);
//             backtrack(arr, i + 1, j, been, ind + 1);
//             arr.pop();
//             been.delete(`${i + 1},${j}`);
//         }

//         if (j - 1 >= 0 && board[i][j - 1] === word[ind] && !been.has(`${i},${j - 1}`)) {
//             been.add(`${i},${j - 1}`);
//             arr.push(board[i][j - 1]);
//             backtrack(arr, i, j - 1, been, ind + 1);
//             arr.pop();
//             been.delete(`${i},${j - 1}`);
//         }

//         if (j + 1 < board[0].length && board[i][j + 1] === word[ind] && !been.has(`${i},${j + 1}`)) {
//             been.add(`${i},${j + 1}`);
//             arr.push(board[i][j + 1]);
//             backtrack(arr, i, j + 1, been, ind + 1);
//             arr.pop();
//             been.delete(`${i},${j + 1}`);
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             let been = new Set();
//             been.add(`${i},${j}`);
//             backtrack([board[i][j]], i, j, been, 1);
//             if (found) return true;
//         }
//     }

//     return false;
// };