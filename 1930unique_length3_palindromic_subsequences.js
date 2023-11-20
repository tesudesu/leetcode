// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

var countPalindromicSubsequence = function(s) {
    let tots = {};
    for (let i = 0; i < s.length; i++) {
        tots[s[i]] = (tots[s[i]] + 1)|| 1;
    }
    let set = new Set();
    let currCount = {};
    currCount[s[0]] = 1;
    for (let i = 1; i < s.length - 1; i++) {
        for (const letter in currCount) {
            if (letter === s[i]) {
                if (tots[letter] > currCount[letter] + 1) {
                    set.add(letter + s[i] + letter);
                }
            } else {
                if (tots[letter] > currCount[letter]) {
                    set.add(letter + s[i] + letter);
                }
            }
        }
        currCount[s[i]] = (currCount[s[i]] + 1) || 1;
    }
    return set.size;
};