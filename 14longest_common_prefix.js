// https://leetcode.com/problems/longest-common-prefix/

// SOLUTION 1

var longestCommonPrefix = function(strs) {
    let shortest = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest) {
            shortest = strs[i].length;
        }
    }
    let result = '';
    for (let i = 0; i < shortest; i++) {
        if (strs.every((word) => word[i] === strs[0][i])) {
            result += strs[0][i];
        } else {
            result += '0';
        }
    }
    return result.replace(/([a-z]*)(0+)(\w*)/, '$1');
};

// SOLUTION 2

var longestCommonPrefix = function(strs) {
    let shortest = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest) {
            shortest = strs[i].length;
        }
    }
    let result = '';
    for (let i = 0; i < shortest; i++) {
        if (!strs.every((word) => word[i] === strs[0][i])) {
            return result;
        } else {
            result += strs[0][i];
        }
    }
    return result;
};
