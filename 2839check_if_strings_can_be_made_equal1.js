// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/

var canBeEqual = function(s1, s2) {
    let even1 = [];
    let odd1 = [];

    let even2 = [];
    let odd2 = [];

    for (let i = 0; i < s1.length; i++) {
        if (i % 2 === 0) {
            even1.push(s1[i]);
            even2.push(s2[i]);
        } else {
            odd1.push(s1[i]);
            odd2.push(s2[i]);
        }
    }

    even1 = even1.sort().toString();
    odd1 = odd1.sort().toString();
    even2 = even2.sort().toString();
    odd2 = odd2.sort().toString();

    return even1 === even2 && odd1 === odd2;
};