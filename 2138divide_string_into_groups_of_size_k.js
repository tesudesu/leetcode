// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

var divideString = function(s, k, fill) {
    let ans = [];

    for (let i = 0; i < s.length; i += k) {
        let str = "";
        for (let j = 0; j < k; j++) {
            if (i + j < s.length) {
                str += s[i + j];
            } else {
                str += fill;
            }
        }
        ans.push(str);
    }

    return ans;
};