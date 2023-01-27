// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) == s.indexOf(s[i]))  {
            return i;
        }
    }
    return -1;
};