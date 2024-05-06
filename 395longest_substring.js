// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

var longestSubstring = function(s, k) {
    const divide = (start, end) => {
        if (end < k) {
            return 0;
        }
        const counts = Array(26).fill(0);
        for (let i = start; i < end; i++) {
            const charCode = s.charCodeAt(i);
            counts[charCode - 97]++;
        }
        for (let i = start; i < end; i++) {
            const charCode = s.charCodeAt(i);
            if (counts[charCode - 97] < k) {
                let nextStart = i;
                while (counts[s.charCodeAt(nextStart) - 97] < k) {
                    nextStart++;
                }
                return Math.max(divide(start, i), divide(nextStart, s.length));
            }
        }
        return end - start;
    }

    return divide(0, s.length);
};


// var longestSubstring = function(s, k) {
//     let ans = 0;

//     for (let i = 0; i < s.length; i++) {
//         let freq = {};
//         for (let j = i; j < s.length; j++) {
//             freq[s[j]] = (freq[s[j]] + 1) || 1;
//             let ok = true;
//             for (const letter in freq) {
//                 if (freq[letter] < k) {
//                     ok = false;
//                     break;
//                 }
//             }
//             if (ok) {
//                 ans = Math.max(ans, j - i + 1);
//             }
//         }
//     }

//     return ans;
// };