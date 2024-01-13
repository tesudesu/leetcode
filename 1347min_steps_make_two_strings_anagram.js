// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

var minSteps = function(s, t) {
    const letters = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        letters[s.charCodeAt(i) - 97]++;
        letters[t.charCodeAt(i) - 97]--;
    }

    let res = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > 0) {
            res += letters[i];
        }
    }

    return res;
};


var minSteps = function(s, t) {
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = 1;
        } else {
            sMap[s[i]]++;
        }

        if (!tMap[t[i]]) {
            tMap[t[i]] = 1;
        } else {
            tMap[t[i]]++;
        }
    }

    let res = 0;

    for (const letter in sMap) {
        if (!tMap[letter]) {
            res += sMap[letter];
        } else if (tMap[letter] < sMap[letter]) {
            res += sMap[letter] - tMap[letter];
        }
    }

    return res;
};