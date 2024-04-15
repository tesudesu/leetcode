// https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/

var findLatestTime = function(s) {
    let str = s.split("");

    if (str[0] === "?") {
        if (str[1] >= "2" && str[1] <= "9") {
            str[0] = "0";
        } else {
            str[0] = "1";
        }
    }

    if (str[1] === "?") {
        if (str[0] === "1") {
            str[1] = "1";
        } else {
            str[1] = "9";
        }
    }

    if (str[3] === "?") {
        str[3] = "5";
    } 

    if (str[4] === "?") {
        str[4] = "9";
    }

    return str.join("");
};