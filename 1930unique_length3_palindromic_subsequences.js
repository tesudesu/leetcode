// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

var countPalindromicSubsequence = function(s) {
    const count = Array(26).fill(0);
    const boundaries = Array(26).fill().map(() => Array(2).fill(-1));

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        if (boundaries[code][0] === -1) {
            boundaries[code][0] = i;
        } 
        boundaries[code][1] = Math.max(boundaries[code][1], i);
        count[code]++;
    }

    const seen = Array(26).fill().map(() => Array(26).fill(0));

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        for (let j = 0; j < 26; j++) {
            if (boundaries[j][0] < i && boundaries[j][1] > i) {
                seen[code][j] = 1;
            }
        }
    }

    let tot = 0;

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 26; j++) {
            tot += seen[i][j];
        }
    }

    return tot;
};


// var countPalindromicSubsequence = function(s) {
//     let tots = {};
//     for (let i = 0; i < s.length; i++) {
//         tots[s[i]] = (tots[s[i]] + 1)|| 1;
//     }
//     let set = new Set();
//     let currCount = {};
//     currCount[s[0]] = 1;
//     for (let i = 1; i < s.length - 1; i++) {
//         for (const letter in currCount) {
//             if (letter === s[i]) {
//                 if (tots[letter] > currCount[letter] + 1) {
//                     set.add(letter + s[i] + letter);
//                 }
//             } else {
//                 if (tots[letter] > currCount[letter]) {
//                     set.add(letter + s[i] + letter);
//                 }
//             }
//         }
//         currCount[s[i]] = (currCount[s[i]] + 1) || 1;
//     }
//     return set.size;
// };