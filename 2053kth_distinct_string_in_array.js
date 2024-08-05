// https://leetcode.com/problems/kth-distinct-string-in-an-array/

var kthDistinct = function(arr, k) {
    const map = {};

    for (const str of arr) {
        map[str] = (map[str] + 1) || 1;
    }

    let num = 0;

    for (const str of arr) {
        if (map[str] === 1) {
            num++;
            if (num === k) {
                return str;
            }
        }
    }

    return "";
};