// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/

var numKLenSubstrNoRepeats = function(s, k) {
    let map = new Map();

    let left = 0;
    let tot = 0;

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) + 1) || 1);

        if (i - left + 1 > k) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }

        if (map.size === k) {
            tot++;
        }
    }

    return tot;
};