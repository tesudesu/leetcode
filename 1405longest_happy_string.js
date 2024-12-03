// https://leetcode.com/problems/longest-happy-string/

var longestDiverseString = function(a, b, c) {
    let str = [];

    while (a > 0 || b > 0 || c > 0) {
        if (a >= b && a >= c) {
            if (str.length >= 2) {
                if (str[str.length - 2] !== "a" || str[str.length - 1] !== "a") {
                    str.push("a");
                    a--;
                } else {
                    if (b >= c && b !== 0) {
                        str.push("b");
                        b--;
                    } else if (c !== 0) {
                        str.push("c");
                        c--;
                    } else {
                        break;
                    }
                }
            } else {
                str.push("a");
                a--;
            }
        } else if (b >= a && b >= c) {
            if (str.length >= 2) {
                if (str[str.length - 2] !== "b" || str[str.length - 1] !== "b") {
                    str.push("b");
                    b--;
                } else {
                    if (a >= c && a !== 0) {
                        str.push("a");
                        a--;
                    } else if (c !== 0) {
                        str.push("c");
                        c--;
                    } else {
                        break;
                    }
                }
            } else {
                str.push("b");
                b--;
            }
        } else {
            if (str.length >= 2) {
                if (str[str.length - 2] !== "c" || str[str.length - 1] !== "c") {
                    str.push("c");
                    c--;
                } else {
                    if (a >= b && a !== 0) {
                        str.push("a");
                        a--;
                    } else if (b !== 0) {
                        str.push("b");
                        b--;
                    } else {
                        break;
                    }
                }
            } else {
                str.push("c");
                c--;
            }
        }
    }

    return str.join("");
};