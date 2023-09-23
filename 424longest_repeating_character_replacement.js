// https://leetcode.com/problems/longest-repeating-character-replacement/

var characterReplacement = function(s, k) {
    let freq = Array(26).fill(0);

    let longest = 0;
    let left = 0;
    let maxFreq = 0;

    for (let i = 0; i < s.length; i++) {
        const ind = s[i].charCodeAt(0) - 65;
        freq[ind]++;
        maxFreq = Math.max(maxFreq, freq[ind]);
        let length = i - left + 1;
        const needToReplace = length - maxFreq;
        if (needToReplace > k) {
            freq[s[left].charCodeAt(0) - 65]--;
            left++;
            length--;
        }
        longest = length;
    }

    return longest;
};


// var characterReplacement = function(s, k) {
//     let freq = Array(26).fill(0);

//     let longest = 0;
//     let left = 0;

//     for (let i = 0; i < s.length; i++) {
//         const ind = s[i].charCodeAt(0) - 65;
//         freq[ind]++;
//         let length = i - left + 1;
//         let highestFreq = Math.max(...freq);
//         let needToReplace = length - highestFreq;
//         while (needToReplace > k) {
//             freq[s[left].charCodeAt(0) - 65]--;
//             left++;
//             length = i - left + 1;
//             highestFreq = Math.max(...freq);
//             needToReplace = length - highestFreq;
//         }
//         longest = Math.max(longest, length);
//     }

//     return longest;
// };