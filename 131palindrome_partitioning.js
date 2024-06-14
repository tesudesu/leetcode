// https://leetcode.com/problems/palindrome-partitioning/

// Approach 1

const isPalindrome = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

var partition = function(s) {
    let ans = [];

    const dfs = (i, partition) => {
        if (i >= s.length) {
            if (partition.length > 0) {
                ans.push(partition.slice());
            }
            return;
        }

        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j + 1);
            if (isPalindrome(substring)) {
                partition.push(substring);
                dfs(j + 1, partition);
                partition.pop();
            }
        }
    }

    dfs(0, []);

    return ans;
};


// Approach 2 - dp for checking whether is palindrome

var partition = function(s) {
    let ans = [];

    const dp = Array(s.length).fill().map(() => Array(s.length).fill(false));

    const dfs = (i, partition) => {
        if (i >= s.length) {
            if (partition.length > 0) {
                ans.push(partition.slice());
            }
            return;
        }

        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j + 1);
            if (s[i] === s[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                partition.push(substring);
                dfs(j + 1, partition);
                partition.pop();
            }
        }
    }

    dfs(0, []);

    return ans;
};