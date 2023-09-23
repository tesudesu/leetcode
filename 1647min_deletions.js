// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/

var minDeletions = function(s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] + 1) || 1;
    }

    let set = new Set();

    let deletions = 0;

    for (const letter in map) {
        if (!set.has(map[letter])) {
            set.add(map[letter])
        } else {
            let val = map[letter];
            while (set.has(val)) {
                val--;
                if (val === 0) break;
            }
            deletions += (map[letter] - val);
            if (val !== 0) {
                set.add(val);
            }
        }
    }

    return deletions;
};