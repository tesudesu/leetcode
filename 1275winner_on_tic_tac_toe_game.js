// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

var tictactoe = function(moves) {
    let row = Array(3).fill(0);
    let col = Array(3).fill(0);
    let upDia = 0;
    let downDia = 0;

    for (let i = 0; i < moves.length; i++) {
        const [x, y] = moves[i];
        if (i % 2 === 0) {
            row[x]++;
            if (row[x] === 3) return "A";
            col[y]++;
            if (col[y] === 3) return "A"
            if (x === 0) {
                if (y === 0) {
                    downDia++;
                } else if (y === 2) {
                    upDia++;
                }
            } else if (x === 2) {
                if (y === 0) {
                    upDia++;
                } else if (y === 2) {
                    downDia++;
                }
            } else if (x === 1 && y === 1) {
                upDia++;
                downDia++;
            }
            if (upDia === 3 || downDia === 3) return "A";
        } else {
            row[x]--;
            if (row[x] === -3) return "B";
            col[y]--;
            if (col[y] === -3) return "B";
            if (x === 0) {
                if (y === 0) {
                    downDia--;
                } else if (y === 2) {
                    upDia--;
                }
            } else if (x === 2) {
                if (y === 0) {
                    upDia--;
                } else if (y === 2) {
                    downDia--;
                }
            } else if (x === 1 && y === 1) {
                upDia--;
                downDia--;
            }
            if (upDia === -3 || downDia === -3) return "B";
        }
    }

    return moves.length === 9 ? "Draw" : "Pending";
};


// Brute force

// var tictactoe = function (moves) {
//     let grid = Array(3).fill().map(() => Array(3).fill(-1));

//     for (let i = 0; i < moves.length; i++) {
//         const [x, y] = moves[i];
//         if (i % 2 === 0) {
//             grid[x][y] = 1;
//             if (i >= 4) {
//                 if (checkThree(grid, x, y, 1)) return "A";
//             }
//         } else {
//             grid[x][y] = 0;
//             if (i >= 5) {
//                 if (checkThree(grid, x, y, 0)) return "B";
//             }
//         }
//     }

//     return moves.length === 9 ? "Draw" : "Pending";
// };

// const checkThree = (grid, x, y, mark) => {
//     // horizontal
//     if (x - 2 >= 0) {
//         if (grid[x - 2][y] === mark && grid[x - 1][y] === mark) return 1;
//     } else if (x - 1 >= 0) {
//         if (grid[x - 1][y] === mark && grid[x + 1][y] === mark) return 1;
//     } else {
//         if (grid[x + 1][y] === mark && grid[x + 2][y] === mark) return 1;
//     }

//     // vertical
//     if (y - 2 >= 0) {
//         if (grid[x][y - 2] === mark && grid[x][y - 1] === mark) return 1;
//     } else if (y - 1 >= 0) {
//         if (grid[x][y - 1] === mark && grid[x][y + 1] === mark) return 1;
//     } else {
//         if (grid[x][y + 1] === mark && grid[x][y + 2] === mark) return 1;
//     }

//     // diagonals
//     if ((x === 0 && y === 0)) {
//         if (grid[x + 2][y + 2] === mark && grid[x + 1][y + 1] === mark) return 1;
//     } else if (x === 0 && y === 2) {
//         if (grid[x + 2][y - 2] === mark && grid[x + 1][y - 1] === mark) return 1;
//     } else if (x === 2 && y === 0) {
//         if (grid[x - 2][y + 2] === mark && grid[x - 1][y + 1] === mark) return 1;
//     } else if (x === 2 && y === 2) {
//         if (grid[x - 2][y - 2] === mark && grid[x - 1][y - 1] === mark) return 1;
//     } else if (x === 1 && y === 1) {
//         if (grid[x - 1][y - 1] === mark && grid[x + 1][y + 1] === mark) return 1;
//         if (grid[x - 1][y + 1] === mark && grid[x + 1][y - 1] === mark) return 1;
//     }

//     return 0;
// }