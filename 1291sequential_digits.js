// https://leetcode.com/problems/sequential-digits/

var sequentialDigits = function(low, high) {
    let ans = [];

    const dfs = (num) => {
        if (num >= low && num <= high) {
            ans.push(num);
        }
        if (num > high) {
            return;
        }

        const lastDigit = num % 10;

        let nextDigit = lastDigit + 1;
        if (nextDigit === 10) {
            return;
        }

        dfs(num * 10 + nextDigit);
    }

    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }

    ans.sort((a, b) => a - b);

    return ans;
};