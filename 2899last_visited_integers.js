// https://leetcode.com/problems/last-visited-integers/

var lastVisitedIntegers = function(words) {
    let integers = [];
    let prevs = 0;

    let ans = [];

    for (let i = 0; i < words.length; i++) {
        const toNum = Number(words[i]);
        if (toNum > 0) {
            integers.push(toNum);
            prevs = 0;
        } else {
            prevs++;
            if (integers.length - prevs >= 0) {
                ans.push(integers[integers.length - prevs]);
            } else {
                ans.push(-1);
            }
        }
    }

    return ans;
};