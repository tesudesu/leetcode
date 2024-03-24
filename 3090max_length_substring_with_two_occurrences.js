// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/

// Sliding window

var maximumLengthSubstring = function(s) {
    let max = 0;
    const count = Array(26).fill(0);
    
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        while (count[s.charCodeAt(i) - 97] === 2) {
            count[s.charCodeAt(left) - 97]--;
            left++;
        }
        
        count[s.charCodeAt(i) - 97]++;
        max = Math.max(max, i - left + 1);
    }

    return max;
};


// Brute force

var maximumLengthSubstring = function(s) {
    let max = 0;
    
    for (let i = 0; i < s.length; i++) {
        const map = new Map();
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j]) && map.get(s[j]) === 2) {
                max = Math.max(max, j - i);
                break;
            }
            if (j === s.length - 1) {
                max = Math.max(max, j - i + 1);
            }
            map.set(s[j], (map.get(s[j]) + 1) || 1);
        }
    }

    return max;
};