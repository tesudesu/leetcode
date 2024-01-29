// https://leetcode.com/problems/minimum-moves-to-capture-the-queen/

var minMovesToCaptureTheQueen = function(a, b, c, d, e, f) {
    if (a === e) {
        if (a === c && ((d > b && d < f) || (d > f && d < b))) {
            return 2;
        } else {
            return 1;
        }
    }

    if (b === f) {
        if (b === d && ((c > a && c < e) || (c > e && c < a))) {
            return 2;
        } else {
            return 1;
        }
    }

    if (e + f === c + d) {
        if (e + f === a + b && ((a > e && a < c) || (a > c && a < e))) {
            return 2;
        } else {
            return 1;
        }
    }

    if (e - f === c - d) {
        if (e - f === a - b && ((a > e && a < c) || (a > c && a < e))) {
            return 2;
        } else {
            return 1;
        }
    }

    return 2;
};