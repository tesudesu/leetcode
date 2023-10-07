// https://leetcode.com/problems/maximum-odd-binary-number/

var maximumOddBinaryNumber = function(s) {
    let ones = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") ones++;
    }

    let res = "";

    for (let i = 0; i < ones - 1; i++) {
        res += "1";
    }

    const remain = s.length - ones;

    for (let i = 0; i < remain; i++) {
        res += "0";
    }

    res += "1";

    return res;
};