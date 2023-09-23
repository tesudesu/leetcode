// https://leetcode.com/problems/find-all-anagrams-in-a-string/

var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];

    let target = Array(26).fill(0);
    let counts = Array(26).fill(0);

    for (let i = 0; i < p.length; i++) {
        target[p[i].charCodeAt(0) - 97]++;
    }

    let res = [];

    let left = 0;

    for (let i = 0; i < s.length; i++) {
        counts[s[i].charCodeAt(0) - 97]++;
        if (i - left + 1 < p.length) continue;
        
        if (i - left + 1 > p.length) {
            counts[s[left].charCodeAt(0) - 97]--;
            left++;
        }

        if (target.toString() === counts.toString()) {
            res.push(left);
        }
    }

    return res;
};