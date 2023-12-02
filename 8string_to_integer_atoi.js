// https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function(s) {
    let limit = Math.pow(2, 31);

    let ans = 0;
    let sawDigit = false;
    let sawSign = false;
    let positive = true;

    for (let i = 0; i < s.length; i++) {
        if (sawDigit || sawSign) {
            if (s[i] >= "0" && s[i] <= "9") {
                let curr = Number(s[i]);
                if (ans > Math.floor(limit / 10)) {
                    if (positive) {
                        return limit - 1;
                    } else {
                        return limit * -1;
                    }
                } else if (ans === Math.floor(limit / 10)) {
                    if (positive) {
                        if (curr > 7) {
                            return limit - 1;
                        } else {
                            ans = ans * 10 + curr;
                        }
                    } else {
                        if (curr > 8) {
                            return limit * -1;
                        } else {
                            ans = ans * 10 + curr;
                        }
                    }
                } else {
                    ans = ans * 10 + curr;
                }
            } else {
                break;
            }
        } else {
            if (s[i] === "-") {
                positive = false;
                sawSign = true;
            } else if (s[i] === "+") {
                sawSign = true;
            } else if (s[i] >= "0" && s[i] <= "9") {
                ans = Number(s[i]);
                sawDigit = true;
            } else if (s[i] === " ") {
                continue;
            } else {
                break;
            }
        }
    }

    return positive ? ans : ans * -1;
};