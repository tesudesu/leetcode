// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function(s) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};


var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) == s.indexOf(s[i]))  {
            return i;
        }
    }
    return -1;
};