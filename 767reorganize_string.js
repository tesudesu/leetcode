// https://leetcode.com/problems/reorganize-string/

var reorganizeString = function(s) {
    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] + 1) || 1;
    }

    let arr = Object.entries(map);

    arr.sort((a, b) => b[1] - a[1]);

    let res = arr[0][0];

    arr[0][1]--;

    while (res.length < s.length) {
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] !== res[res.length - 1] && arr[i][1] > 0) {
                res += arr[i][0];
                arr[i][1]--;
                found = true;
                break;
            }
        }
        if (!found) return "";
        arr.sort((a, b) => b[1] - a[1]);
    }

    return res;
};