// https://leetcode.com/problems/masking-personal-information/

var maskPII = function(s) {
    if (s.includes("@")) {
        let ans = [];
        ans.push(s[0].toLowerCase());
        ans.push("*".repeat(5));
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "@") {
                ans.push(s[i - 1].toLowerCase());
                ans.push(s[i]);
                for (let j = i + 1; j < s.length; j++) {
                    ans.push(s[j].toLowerCase());
                }
                break;
            }
        }
        return ans.join("");
    } else {
        s = s.replace(/[+\-()\s]/g, "");
        s = s.split("");
        let ans = [];
        if (s.length === 10) {
            ans.push("*".repeat(3));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            for (let i = 6; i < 10; i++) {
                ans.push(s[i]);
            }
        } else if (s.length === 11) {
            ans.push("+");
            ans.push("*");
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            for (let i = 7; i < 11; i++) {
                ans.push(s[i]);
            }
        } else if (s.length === 12) {
            ans.push("+");
            ans.push("*".repeat(2));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            for (let i = 8; i < 12; i++) {
                ans.push(s[i]);
            }
        } else {
            ans.push("+");
            ans.push("*".repeat(3));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            ans.push("*".repeat(3));
            ans.push("-");
            for (let i = 9; i < 13; i++) {
                ans.push(s[i]);
            }
        }
        return ans.join("");
    }
};