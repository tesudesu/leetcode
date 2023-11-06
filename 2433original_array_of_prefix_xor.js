// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/

var findArray = function(pref) {
    let ans = Array(pref.length).fill();
    ans[0] = pref[0];

    for (let i = 1; i < pref.length; i++) {
        ans[i] = pref[i - 1] ^ pref[i];
    }

    return ans;
};