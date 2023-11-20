// https://leetcode.com/problems/sort-vowels-in-a-string/

// Counting sort, O(n) time since fixed 10 vowels

var sortVowels = function(s) {
    let vowelsCount = {};
    let vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    for (let i = 0; i < s.length; i++) {
        if (vowelsSet.has(s[i])) {
            vowelsCount[s[i]] = (vowelsCount[s[i]] + 1) || 1;
        }
    }
    let vowelsOrder = "AEIOUaeiou";
    let res = "";
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowelsSet.has(s[i])) {
            while (!vowelsCount.hasOwnProperty(vowelsOrder[j]) || vowelsCount[vowelsOrder[j]] === 0) {
                j++;
            }
            vowelsCount[vowelsOrder[j]]--;
            res += vowelsOrder[j];
        } else {
            res += s[i];
        }
    }
    return res;
};


// Regular sorting, O(nlogn) time

var sortVowels = function(s) {
    let vowels = [];
    let vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    for (let i = 0; i < s.length; i++) {
        if (vowelsSet.has(s[i])) {
            vowels.push(s[i]);
        }
    }
    vowels.sort();
    let res = "";
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowelsSet.has(s[i])) {
            res += vowels[j];
            j++;
        } else {
            res += s[i];
        }
    }
    return res;
};