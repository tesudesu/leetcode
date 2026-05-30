// https://leetcode.com/problems/longest-happy-prefix/

var longestPrefix = function(s) {
    const base = 29;
    const MOD = 1e9 + 7;

    let hashForward = 0;
    let hashReverse = 0;
    let power = 1;
    let max = -1;

    for (let i = 0; i < s.length - 1; i++) {
        let codeForward = s.charCodeAt(i) - 97 + 1;
        let codeReverse = s.charCodeAt(s.length - i - 1) - 97 + 1;

        hashForward = (hashForward * base + codeForward) % MOD;
        hashReverse = (hashReverse + power * codeReverse) % MOD;
        power = (power * base) % MOD;

        if (hashForward == hashReverse) {
            max = i;
        }
    }

    return s.slice(0, max + 1);
};