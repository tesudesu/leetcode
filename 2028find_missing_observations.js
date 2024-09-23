// https://leetcode.com/problems/find-missing-observations/

var missingRolls = function(rolls, mean, n) {
    let m = 0;
    for (let i = 0; i < rolls.length; i++) {
        m += rolls[i];
    }
    let remaining = mean * (n + rolls.length) - m;
    if (remaining < n) return [];
    let min = 1;
    for (let i = 6; i >= 1; i--) {
        if (i * n <= remaining) {
            min = i;
            break;
        }
    }
    remaining -= n * min;
    if (remaining > n) return [];
    let ans = Array(n).fill(min);
    let i = 0;
    while (remaining > 0) {
        ans[i]++;
        if (ans[i] > 6) {
            return [];
        }
        i++;
        remaining--;
    }
    return ans;
};