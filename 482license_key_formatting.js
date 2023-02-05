// https://leetcode.com/problems/license-key-formatting/

var licenseKeyFormatting = function(s, k) {
    const replaced = s.replace(/-/g, '');
    const length = replaced.length;
    if (length <= k) {
        return replaced.toUpperCase();
    }
    let result = '';
    const start = length % k;
    if (start != 0) {
        result += replaced.slice(0, start);
        result += '-';
    }
    let num = 0;
    for (let i = start; i < length; i++) {
        if (num % k == 0 && num != 0) {
            result += '-';
        }
        result += replaced[i];
        num++;
    }
    return result.toUpperCase();
};