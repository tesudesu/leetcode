// https://leetcode.com/problems/minimum-length-of-anagram-concatenation/description/

var minAnagramLength = function(s) {
    for (let i = 1; i <= s.length; i++) {
        if (s.length % i !== 0) continue;
        const counts = Array(26).fill(0);
        for (let j = 0; j < i; j++) {
            counts[s.charCodeAt(j) - 97]++;
        }
        let found = true;
        for (let j = i; j < s.length; j += i) {
            let newCounts = Array(26).fill(0);
            for (let k = j; k < j + i; k++) {
                newCounts[s.charCodeAt(k) - 97]++;
            }
            for (let q = 0; q < 26; q++) {
                if (counts[q] !== newCounts[q]) {
                    found = false;
                    break;
                }
            }
            if (!found) {
                break;
            }
        }
        if (found) {
            return i;
        }
    }
};