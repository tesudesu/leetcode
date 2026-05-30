// https://leetcode.com/problems/sum-of-scores-of-built-strings/

var sumScores = function(s) {
    const z = Array(s.length).fill(0);
    z[0] = s.length;

    let l = 0;
    let r = 0;

    for (let i = 1; i < s.length; i++) {
        if (i > r) {
            l = i;
            r = i;
            while (r < s.length && s[r - l] == s[r]) {
                r++;
            }
            z[i] = r - l;
            r--;
        } else {
            let mirror = i - l;
            if (z[mirror] < r - i + 1) {
                z[i] = z[mirror];
            } else {
                l = i;
                let len = r - i + 1;
                while (i + len < s.length && s[len] == s[i + len]) {
                    len++;
                }
                z[i] = len;
                r = i + len - 1;
            }
        }
    }

    let sum = 0;

    for (const val of z) {
        sum += val;
    }

    return sum;
};