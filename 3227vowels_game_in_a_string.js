// https://leetcode.com/problems/vowels-game-in-a-string/

var doesAliceWin = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            return true;
        }
    }

    return false;
};