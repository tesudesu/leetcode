// https://leetcode.com/problems/make-three-strings-equal/

var findMinimumOperations = function(s1, s2, s3) {
    if (s1[0] !== s2[0] || s1[0] !== s3[0] || s2[0] !== s3[0]) return -1;

    let p = 1;

    while (p < s1.length && p < s2.length && p < s3.length) {
        if (s1[p] === s2[p] && s2[p] === s3[p]) {
            p++;
        } else {
            break;
        }
    }

    return s1.length - p + s2.length - p + s3.length - p;
};