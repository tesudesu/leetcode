// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let arrT = t.split('');
    let indexToSplice;
    for (let i = 0; i < s.length; i++) {
        indexToSplice = arrT.indexOf(s[i]);
        if (indexToSplice < 0) {
            return false;
        }
        arrT.splice(indexToSplice, 1);
    }
    return true;
};

