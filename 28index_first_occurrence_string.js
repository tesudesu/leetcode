// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = i;
        let k = 0;
        while (j < haystack.length && k < needle.length && haystack[j] === needle[k]) {
            j++;
            k++;
        }
        if (k === needle.length) return i;
    }

    return -1;
};


// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };