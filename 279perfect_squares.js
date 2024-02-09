// https://leetcode.com/problems/perfect-squares/

var numSquares = function(n) {
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    let i = 1;
    while (i * i <= n) {
        dp[i * i] = 1;
        i++;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
        }
    }

    return dp[n];
};


// Top-down DP

var numSquares = function(n) {
    let squares = [];

    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            squares.push(i);
        }
    }

    const cache = Array(n + 1).fill(-1);
    
    const dp = (num) => {
        if (num === 0) {
            return 0;
        }
        if (num < 0) {
            return Infinity;
        }

        if (cache[num] !== -1) {
            return cache[num];
        }

        let ans = Infinity;

        for (let i = 0; i < squares.length; i++) {
            if (squares[i] > num) break;
            ans = Math.min(ans, dp(num - squares[i]) + 1);
        }

        cache[num] = ans;

        return ans;
    }

    return dp(n);
};


// BFS

var numSquares = function(n) {
    if (Number.isInteger(Math.sqrt(n))) {
        return 1;
    }

    let squares = [];
    let level = new Set();

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        level.add(i * i);
        squares.push(i * i);
    }

    let count = 1;

    while (level.size > 0) {
        let newLevel = new Set();
        for (const num of level) {
            for (const square of squares) {
                if (num + square === n) {
                    return count + 1;
                } else if (num + square < n) {
                    newLevel.add(num + square);
                }
            }
        }
        level = newLevel;
        count++;
    }
};


// DFS (TLE)

// var numSquares = function(n) {
//     let min = Infinity;

//     const dfs = (num, count) => {
//         if (num === 0) {
//             min = Math.min(min, count);
//             return;
//         }
//         if (num < 0) return;

//         for (let i = num; i >= 1; i--) {
//             const square = Math.sqrt(i);
//             if (Number.isInteger(square)) {
//                 dfs(num - i, count + 1);
//             }
//         }
//     }

//     dfs(n, 0);

//     return min;
// };