// https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/

var takeCharacters = function(s, k) {
    const freq = Array(3).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    if (Math.min(...freq) < k) {
        return -1;
    }

    let maxInnerLength = 0;

    let left = 0;

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]--;

        while (Math.min(...freq) < k) {
            freq[s.charCodeAt(left) - 97]++
            left++;
        }
        
        maxInnerLength = Math.max(maxInnerLength, i - left + 1);
    }

    return s.length - maxInnerLength;
};