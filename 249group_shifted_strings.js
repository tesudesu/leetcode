// https://leetcode.com/problems/group-shifted-strings/

var groupStrings = function (strings) {
    let diff = {};

    for (let i = 0; i < strings.length; i++) {
        let str = "+";
        for (let j = 1; j < strings[i].length; j++) {
            str += (strings[i].charCodeAt(j) - strings[i].charCodeAt(j - 1) + 26) % 26 + "+";
        }
        if (diff[str]) {
            diff[str].push(strings[i]);
        } else {
            diff[str] = [strings[i]];
        }
    }

    let ans = [];

    for (const key in diff) {
        ans.push(diff[key]);
    }

    return ans;
};