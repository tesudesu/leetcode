// https://leetcode.com/problems/game-of-life/

var gameOfLife = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let numLive = 0;
            if (i - 1 >= 0) {
                if (board[i-1][j] === 1 || board[i-1][j] === 11) numLive++;
                if (j - 1 >= 0) {
                    if (board[i-1][j-1] === 1 || board[i-1][j-1] === 11) numLive++;
                }
                if (j + 1 < board[0].length) {
                    if (board[i-1][j+1] === 1 || board[i-1][j+1] === 11) numLive++;
                }
            }
            if (j - 1 >= 0) {
                if (board[i][j-1] === 1 || board[i][j-1] === 11) numLive++;
            }
            if (j + 1 < board[0].length) {
                if (board[i][j+1] === 1 || board[i][j+1] === 11) numLive++;
            }
            if (i + 1 < board.length) {
                if (board[i+1][j] === 1 || board[i+1][j] === 11) numLive++;
                if (j - 1 >= 0) {
                    if (board[i+1][j-1] === 1 || board[i+1][j-1] === 11) numLive++;
                }
                if (j + 1 < board[0].length) {
                    if (board[i+1][j+1] === 1 || board[i+1][j+1] === 11) numLive++;
                }
            }

            if (board[i][j] === 0) {
                if (numLive === 3) {
                    board[i][j] += 10;
                }
            } else {
                if (numLive < 2 || numLive > 3) {
                    board[i][j] += 10;
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 11) {
                board[i][j] = 0;
            } else if (board[i][j] === 10) {
                board[i][j] = 1;
            }
        }
    }; 
};


// var gameOfLife = function(board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             board[i][j] = [board[i][j], 0];
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             let numLive = 0;
//             if (i - 1 >= 0) {
//                 if (board[i-1][j][0] === 1) numLive++;
//                 if (j - 1 >= 0) {
//                     if (board[i-1][j-1][0] === 1) numLive++;
//                 }
//                 if (j + 1 < board[0].length) {
//                     if (board[i-1][j+1][0] === 1) numLive++;
//                 }
//             }
//             if (j - 1 >= 0) {
//                 if (board[i][j-1][0] === 1) numLive++;
//             }
//             if (j + 1 < board[0].length) {
//                 if (board[i][j+1][0] === 1) numLive++;
//             }
//             if (i + 1 < board.length) {
//                 if (board[i+1][j][0] === 1) numLive++;
//                 if (j - 1 >= 0) {
//                     if (board[i+1][j-1][0] === 1) numLive++;
//                 }
//                 if (j + 1 < board[0].length) {
//                     if (board[i+1][j+1][0] === 1) numLive++;
//                 }
//             }

//             if (board[i][j][0] === 0) {
//                 if (numLive === 3) {
//                     board[i][j][1] = 1;
//                 } else {
//                     board[i][j][1] = board[i][j][0];
//                 }
//             } else {
//                 if (numLive < 2 || numLive > 3) {
//                     board[i][j][1] = 0;
//                 } else {
//                     board[i][j][1] = board[i][j][0];
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             board[i][j] = board[i][j][1];
//         }
//     }; 
// };