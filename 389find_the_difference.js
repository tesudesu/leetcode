// https://leetcode.com/problems/find-the-difference/

var findTheDifference = function(s, t) {
    let sArr = s.split('');
    let tArr = t.split('');
    sArr.sort();
    tArr.sort();

    for (let i = 0; i < tArr.length; i++) {
        if (sArr[i] != tArr[i]) return tArr[i];
    }
};