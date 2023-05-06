// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }
    let max = count;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
        if (vowels.has(s[i-k])) {
            count--;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
};

// var maxVowels = function(s, k) {
//     const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         let curr = 0;
//         for (let j = i; j < i+k; j++) {
//             if (vowels.has(s[j])) {
//                 curr++;
//             }
//         }
//         if (curr > max) {
//             max = curr;
//         }
//     }
//     return max;
// };