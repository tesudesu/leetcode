// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

var areAlmostEqual = function(s1, s2) {
    let arr = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            arr.push(i);
        }
    }

    if (arr.length > 2 || arr.length === 1) {
        return false;
    }

    if (arr.length === 0) {
        return true;
    }

    if (s1[arr[0]] === s2[arr[1]] && s1[arr[1]] === s2[arr[0]]) {
        return true;
    } else {
        return false;
    }
};