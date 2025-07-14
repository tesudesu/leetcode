// https://leetcode.com/problems/find-the-original-typed-string-i/

var possibleStringCount = function(word) {
    let tot = 0;
    let blocks = 0;
    let curr = 1;

    for (let i = 1; i < word.length; i++) {
        if (word[i] !== word[i - 1]) {
            if (curr > 1) {
                tot += curr;
                curr = 1;
                blocks++;
            }
        } else {
            curr++;
        }
    }

    if (curr > 1) {
        tot += curr;
        blocks++;
    }

    if (blocks > 1) {
        tot = tot - blocks + 1;
    }

    return tot === 0 ? 1 : tot;
};