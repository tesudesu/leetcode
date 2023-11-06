// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

var minAddToMakeValid = function(s) {
    let open = 0;
    let add = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            open++;
        } else {
            if (open === 0) {
                add++;
            } else {
                open--;
            }
        }
    }

    return add + open;
};