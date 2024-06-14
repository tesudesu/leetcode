// https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/

var minimumChairs = function(s) {
    let tot = 0;
    let free = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "E") {
            if (free > 0) {
                free--;
            } else {
                tot++;
            }
        } else {
            free++;
        }
    }

    return tot;
};