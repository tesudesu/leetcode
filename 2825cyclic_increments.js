// https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments/

var canMakeSubsequence = function(str1, str2) {
    let str1Cyclic = "";

    for (let i = 0; i < str1.length; i++) {
        let increment = str1.charCodeAt(i) + 1;
        if (increment === 123) increment = 97;
        str1Cyclic += String.fromCharCode(increment);
    }

    let i = 0;
    let j = 0;

    while (i < str2.length && j < str1.length) {
        if (str1[j] === str2[i] || str1Cyclic[j] === str2[i]) {
            i++;
        }
        j++;
    }

    return i === str2.length;
};