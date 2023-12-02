// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

var arrayStringsAreEqual = function(word1, word2) {
    let p1 = 0;
    let pp1 = 0;
    let p2 = 0;
    let pp2 = 0;

    while (p1 < word1.length && p2 < word2.length) {
        if (word1[p1][pp1] !== word2[p2][pp2]) {
            return false;
        }
        pp1++;
        pp2++;
        if (pp1 >= word1[p1].length) {
            pp1 = 0;
            p1++;
        }
        if (pp2 >= word2[p2].length) {
            pp2 = 0;
            p2++;
        }
    }

    return p1 === word1.length && p2 === word2.length;
};

// var arrayStringsAreEqual = function(word1, word2) {
//     let str1 = word1.join("");
//     let str2 = word2.join("");
//     return str1 === str2;
// };