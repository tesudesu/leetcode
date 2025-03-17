// https://leetcode.com/problems/minimum-length-of-string-after-operations/

var minimumLength = function(s) {
    let freq = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        freq[code]++;
    }

    let tot = 0;

    for (let i = 0; i < 26; i++) {
        if (freq[i] < 3) {
            tot += freq[i];
            continue;
        }
        if (freq[i] % 2 === 0) {
            tot += 2;
        } else {
            tot += 1;
        }
    }

    return tot;
};


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