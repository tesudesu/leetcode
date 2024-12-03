// https://leetcode.com/problems/adding-spaces-to-a-string/

var addSpaces = function(s, spaces) {
    let ans = [];

    let j = 0;
    let i = 0;

    while (j < s.length) {
        if (j === spaces[i]) {
            ans.push(" ");
            i++;
        } else {
            ans.push(s[j]);
            j++;
        }
    }

    return ans.join("");
};