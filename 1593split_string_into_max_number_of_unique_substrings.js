// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/

var maxUniqueSplit = function(s) {
    let max = 0;
    const uniqueSubstrings = new Set();

    const bt = (i, strings) => {
        if (i === s.length) {
            max = Math.max(max, strings);
            return;
        }

        if (strings + s.length - i <= max) {
            return;
        }

        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j + 1);
            if (uniqueSubstrings.has(substring)) continue;
            uniqueSubstrings.add(substring);
            bt(j + 1, strings + 1);
            uniqueSubstrings.delete(substring);
        }
    }

    bt(0, 0);

    return max;
};