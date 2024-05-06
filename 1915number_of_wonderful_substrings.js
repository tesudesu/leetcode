// https://leetcode.com/problems/number-of-wonderful-substrings/

var wonderfulSubstrings = function(word) {
    const counts = new Map();
    counts.set(0, 1);
    let mask = 0;
    let tot = 0;

    for (let i = 0; i < word.length; i++) {
        const pos = word.charCodeAt(i) - 97;
        const bit = 1 << pos;
        mask ^= bit;
        if (counts.has(mask)) {
            tot += counts.get(mask);
        }
        for (let j = 0; j < 10; j++) {
            const addNum = (1 << j);
            const str = mask ^ addNum;
            if (counts.has(str)) {
                tot += counts.get(str);
            }
        }
        counts.set(mask, (counts.get(mask) + 1) || 1);
    }

    return tot;
};