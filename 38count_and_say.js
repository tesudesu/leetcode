// https://leetcode.com/problems/count-and-say/

var countAndSay = function(n) {
    let str = "1";
    let currStr = [];

    for (let i = 1; i < n; i++) {
        let curr = str[0];
        let count = 1;
        for (let j = 1; j < str.length; j++) {
            if (curr === str[j]) {
                count++;
            } else {
                currStr.push(String(count));
                currStr.push(curr);
                count = 1;
                curr = str[j];
            }
        }
        currStr.push(String(count));
        currStr.push(curr);
        str = currStr.join("");
        currStr = [];
    }

    return str;
};