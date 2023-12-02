// https://leetcode.com/problems/count-beautiful-substrings-i/

var beautifulSubstrings = function(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let tot = 0;

    for (let i = 0; i < s.length; i++) {
        let v = 0;
        let c = 0;
        for (let j = i; j < s.length; j++) {
            if (vowels.has(s[j])) {
                v++;
            } else {
                c++;
            }
            if (v !== 0 && v === c) {
                if ((v * c) % k === 0) tot++;
            }
        }
    }

    return tot;
};