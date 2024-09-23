// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {
    const set = new Set();

    for (const char of allowed) {
        set.add(char);
    }

    let tot = 0;

    for (const word of words) {
        let ok = true;
        for (const char of word) {
            if (!set.has(char)) {
                ok = false;
                break;
            }
        }
        if (ok) {
            tot++;
        }
    }

    return tot;
};