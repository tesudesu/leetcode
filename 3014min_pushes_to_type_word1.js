// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/

var minimumPushes = function(word) {
    const sets = Math.floor(word.length / 8);
    const extra = word.length % 8;

    let ans = 0;

    for (let i = 1; i <= sets; i++) {
        ans += 8 * i;
    }

    return ans + (sets + 1) * extra;
};