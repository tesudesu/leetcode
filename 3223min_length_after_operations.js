// https://leetcode.com/problems/minimum-length-of-string-after-operations/

var minimumLength = function(s) {
    const counts = {};
    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] + 1) || 1;
    }

    let tot = 0;

    for (const letter in counts) {
        let count = counts[letter];
        while (count > 2) {
            count -= 2;
        }
        tot += count;
    }

    return tot;
};