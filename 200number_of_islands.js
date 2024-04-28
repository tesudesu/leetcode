// https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
    let tot = 0;

    const search = (x, y) => {
        let stack = [[x, y]];

        while (stack.length > 0) {
            const [first, second] = stack.pop();
            if (first + 1 < grid.length && grid[first + 1][second] == 1) {
                grid[first + 1][second] = "0";
                stack.push([first + 1, second]);
            }
            if (first - 1 >= 0 && grid[first - 1][second] == 1) {
                grid[first - 1][second] = "0";
                stack.push([first - 1, second]);
            }
            if (second + 1 < grid[0].length && grid[first][second + 1] == 1) {
                grid[first][second + 1] = "0";
                stack.push([first, second + 1]);
            }
            if (second - 1 >= 0 && grid[first][second - 1] == 1) {
                grid[first][second - 1] = "0";
                stack.push([first, second - 1]);
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                grid[i][j] = "0";
                tot++;
                search(i, j);
            }
        }
    }

    return tot;
};


var numIslands = function(grid) {
    let num = 0;

    const islanded = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i === grid.length || j === grid[0].length || grid[i][j] === "0" || islanded[i][j]) return;
        islanded[i][j] = true;
        dfs(i - 1, j);
        dfs(i + 1, j);
        dfs(i, j - 1);
        dfs(i, j + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (islanded[i][j] || grid[i][j] === "0") continue;
            num++;
            dfs(i, j);
        }
    }

    return num;
};


// var numIslands = function(grid) {
//     let tot = 0;

//     const search = (x, y) => {
//         if (x + 1 < grid.length && grid[x + 1][y] == 1) {
//             grid[x + 1][y] = "0";
//             search(x + 1, y);
//         } 
//         if (x - 1 >= 0 && grid[x - 1][y] == 1) {
//             grid[x - 1][y] = "0";
//             search(x - 1, y);
//         }
//         if (y + 1 < grid[0].length && grid[x][y + 1] == 1) {
//             grid[x][y + 1] = "0";
//             search(x, y + 1);
//         }
//         if (y - 1 >= 0 && grid[x][y - 1] == 1) {
//             grid[x][y - 1] = "0";
//             search(x, y - 1);
//         }
//     }

//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] == 1) {
//                 grid[i][j] = "0";
//                 tot++;
//                 search(i, j);
//             }
//         }
//     }

//     return tot;
// };