// https://leetcode.com/problems/delete-characters-to-make-fancy-string/

var makeFancyString = function(s) {
    let count = 1;
    let ans = [s[0]];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === ans[ans.length - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count === 3) {
            count--;
        } else {
            ans.push(s[i]);
        }
    }

    return ans.join("");
};