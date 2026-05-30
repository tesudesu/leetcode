// https://leetcode.com/problems/shortest-palindrome/

var shortestPalindrome = function(s) {
    if (s.length === 0) {
        return s;
    }

    const base = 29;
    const MOD = 1e9 + 7;

    let hashForward = 0;
    let hashReverse = 0;
    let power = 1;
    let bestLength = 0;

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97 + 1;

        hashForward = (hashForward * base + code) % MOD;
        hashReverse = (hashReverse + power * code) % MOD;
        power = (power * base) % MOD;

        if (hashForward === hashReverse) {
            bestLength = i + 1;
        }
    }

    let remainder = s.slice(bestLength);
    let reversed = [];

    for (let i = remainder.length - 1; i >= 0; i--) {
        reversed.push(remainder[i]);
    }

    return reversed.join("") + s;
};