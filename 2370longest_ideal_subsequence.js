// https://leetcode.com/problems/longest-ideal-subsequence/

var longestIdealString = function(s, k) {
    const maxLengthEndingAtLetter = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        let maxCharLength = 0;
        for (let j = Math.max(charCode - k, 97); j <= charCode + k; j++) {
            if (maxLengthEndingAtLetter[j - 97] > maxCharLength) {
                maxCharLength = maxLengthEndingAtLetter[j - 97];
            }
        }
        maxLengthEndingAtLetter[charCode - 97] = maxCharLength + 1;
    }

    return Math.max(...maxLengthEndingAtLetter);
};