// https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/

var closetTarget = function(words, target, startIndex) {
    const n = words.length;
    for (let i = 0; i < n; i++) {
        if (words[(startIndex + i) % n] == target) {
            return i;
        }
        if (words[(startIndex - i + n) % n] == target) {
            return i;
        }
    }
    return -1;
};