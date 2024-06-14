// https://leetcode.com/problems/student-attendance-record-ii/

// Top down DP

var checkRecord = function(n) {
    const mod = 1e9 + 7;
    const cache = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(-1)));

    const dfs = (student, absences, consecutiveLates) => {
        if (student === n + 1) {
            return 1;
        }

        if (cache[student][absences][consecutiveLates] !== -1) {
            return cache[student][absences][consecutiveLates];
        }

        let ans = 0;

        if (absences === 0) {
            if (consecutiveLates <= 1) {
                ans = (ans + dfs(student + 1, 0, consecutiveLates + 1)) % mod;
            } 
            ans = (ans + dfs(student + 1, 1, 0)) % mod;
            ans = (ans + dfs(student + 1, 0, 0)) % mod;
        } else {
            if (consecutiveLates <= 1) {
                ans = (ans + dfs(student + 1, 1, consecutiveLates + 1)) % mod;
            }
            ans = (ans + dfs(student + 1, 1, 0)) % mod;
        }

        cache[student][absences][consecutiveLates] = ans;

        return ans;
    }

    return dfs(1, 0, 0);
};


// Bottom up DP

var checkRecord = function(n) {
    const mod = 1e9 + 7;
    const dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(0)));

    dp[0][0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let absences = 0; absences <= 1; absences++) {
            for (let consecutiveLates = 0; consecutiveLates <= 2; consecutiveLates++) {
                // choose P
                dp[i][absences][0] = (dp[i][absences][0] + dp[i - 1][absences][consecutiveLates]) % mod;

                // choose A
                if (absences === 0) {
                    dp[i][absences + 1][0] = (dp[i][absences + 1][0] + dp[i - 1][absences][consecutiveLates]) % mod;
                }

                // choose L
                if (consecutiveLates <= 1) {
                    dp[i][absences][consecutiveLates + 1] = (dp[i][absences][consecutiveLates + 1] + dp[i - 1][absences][consecutiveLates]) % mod;
                }
            }
        }
    }

    let count = 0;
    for (let absences = 0; absences <= 1; absences++) {
        for (let consecutiveLates = 0; consecutiveLates <= 2; consecutiveLates++) {
            count = (count + dp[n][absences][consecutiveLates]) % mod;
        }
    }

    return count;
};