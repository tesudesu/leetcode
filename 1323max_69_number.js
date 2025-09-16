// https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    let str = String(num).split("");

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "6") {
            str[i] = "9";
            return Number(str.join(""));
        }
    }

    return num;
};