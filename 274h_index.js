// https://leetcode.com/problems/h-index/

var hIndex = function(citations) {
    citations.sort((a, b) => a - b);

    let h = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] === citations.length - i) {
            h = citations[i];
        } else if (citations[i] > citations.length - i) {
            h = Math.max(h, citations.length - i);
        }
    }

    return h;
};