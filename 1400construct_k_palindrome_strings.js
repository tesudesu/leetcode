// https://leetcode.com/problems/construct-k-palindrome-strings/

var canConstruct = function(s, k) {
    if (k > s.length) return false;

    const count = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        count[code]++;
    }

    let odd = 0;

    for (const num of count) {
        if (num % 2 !== 0) {
            odd++;
        }
    }

    return odd <= k;
};