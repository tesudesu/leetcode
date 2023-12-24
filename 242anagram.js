// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] + 1) || 1;
    }

    for (let i = 0; i < t.length; i++) {
        if (!sMap.hasOwnProperty(t[i]) || sMap[t[i]] === 0) {
            return false;
        }
        sMap[t[i]]--;
    }

    return true;
};


// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     let arrT = t.split('');
//     let indexToSplice;
//     for (let i = 0; i < s.length; i++) {
//         indexToSplice = arrT.indexOf(s[i]);
//         if (indexToSplice < 0) {
//             return false;
//         }
//         arrT.splice(indexToSplice, 1);
//     }
//     return true;
// };