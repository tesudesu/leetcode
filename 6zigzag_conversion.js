// https://leetcode.com/problems/zigzag-conversion/

var convert = function (s, numRows) {
    if (numRows >= s.length || numRows === 1) return s;

    let res = "";

    let first = (numRows - 1) * 2;
    let second = 0;

    for (let i = 0; i < numRows; i++) {
        res += s[i];

        let ind = i;
        let one = true;

        while (ind < s.length) {
            if (one) {
                if (first === 0) {
                    ind += second;
                } else {
                    ind += first;
                    one = false;
                }
            } else {
                if (second === 0) {
                    ind += first;
                } else {
                    ind += second;
                    one = true;
                }
            }

            if (ind < s.length) {
                res += s[ind];
            }
        }

        first -= 2;
        second += 2;
    }

    return res;
};