// https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/

var longestSubsequence = function (s, k) {
    let ans = 0;
    let tot = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "0") {
            ans++;
        } else if (s.length - i - 1 < 31) {
            let add = 1 << (s.length - i - 1);
            if (tot + add <= k) {
                tot += add;
                ans++;
            }
        }
    }

    return ans;
};