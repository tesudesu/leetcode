// https://leetcode.com/problems/smallest-number-with-all-set-bits/

var smallestNumber = function(n) {
    let str = n.toString(2);

    let toAdd = 0;
    let curr = 1;

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "0") {
            toAdd += curr;
        }
        curr *= 2;
    }

    return n + toAdd;
};