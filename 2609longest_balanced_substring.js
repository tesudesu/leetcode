// https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/

var findTheLongestBalancedSubstring = function (s) {
    let zero = 0;
    let one = 0;
    let max = 0;
    let currMax;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0 && one === 0) {
            zero++;
        } else if (s[i] == 1 && zero !== 0) {
            one++;
        } else if (s[i] == 0 && one !== 0) {
            zero = 0;
            one = 0;
            zero++;
        }
        if (one !== 0) {
            currMax = Math.min(zero, one) * 2;
            if (currMax > max) {
                max = currMax;
            }
        }
    }
    return max;
};