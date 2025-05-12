// https://leetcode.com/problems/count-the-hidden-sequences/

var numberOfArrays = function(differences, lower, upper) {
    let max = 0;
    let min = 0;

    let curr = 0;

    for (let num of differences) {
        curr += num;
        max = Math.max(max, curr);
        min = Math.min(min, curr);
    }

    let range = max - min + 1;
    let totRange = upper - lower + 1;

    let ans = totRange - range + 1;
    return Math.max(ans, 0);
};