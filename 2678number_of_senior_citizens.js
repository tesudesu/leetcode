// https://leetcode.com/problems/number-of-senior-citizens/

var countSeniors = function(details) {
    let res = 0;
    let age;
    for (let i = 0; i < details.length; i++) {
        age = Number(details[i][11] + details[i][12]);
        if (age > 60) res++;
    }
    return res;
};