// https://leetcode.com/problems/solving-questions-with-brainpower/

var mostPoints = function(questions) {
    const n = questions.length;
    const solve = Array(n).fill(0);
    const dontSolve = Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const [point, brainpower] = questions[i];
        solve[i] = point;
        if (i + brainpower + 1 < n) {
            solve[i] += Math.max(solve[i + brainpower + 1], dontSolve[i + brainpower + 1]);
        }
        dontSolve[i] = 0;
        if (i + 1 < n) {
            dontSolve[i] = Math.max(solve[i + 1], dontSolve[i + 1]);
        }
    }

    return Math.max(solve[0], dontSolve[0]);
};


var mostPoints = function(questions) {
    const n = questions.length;
    const dp = Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        const [point, brainpower] = questions[i];
        let solve = point;
        if (i + brainpower + 1 < n) {
            solve += dp[i + brainpower + 1];
        }
        let dontSolve = 0;
        if (i + 1 < n) {
            dontSolve = dp[i + 1];
        }
        dp[i] = Math.max(solve, dontSolve);
    }

    return dp[0];
};