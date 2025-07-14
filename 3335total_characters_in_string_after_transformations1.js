// https://leetcode.com/problems/total-characters-in-string-after-transformations-i/

var lengthAfterTransformations = function(s, t) {
    const mod = 1e9 + 7;
    let count = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        count[code]++;
    }

    for (let i = 0; i < t; i++) {
        let newCount = Array(26).fill(0);
        for (let j = 0; j < 26; j++) {
            if (count[j] === 0) continue;
            if (j === 25) {
                newCount[0] = (newCount[0] + count[25]) % mod;
                newCount[1] = (newCount[1] + count[25]) % mod;
            } else {
                newCount[j + 1] = (newCount[j + 1] + count[j]) % mod;
            }
        }
        count = newCount;
    }

    let tot = 0;

    for (let i = 0; i < 26; i++) {
        tot = (tot + count[i]) % mod;
    }

    return tot;
};