// https://leetcode.com/problems/longest-common-subsequence/

var longestCommonSubsequence = function (text1, text2) {
    let cache = {};

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            const string = `${i},${j}`;
            if (text1[i] === text2[j]) {
                if (i - 1 === -1 || j - 1 === -1) {
                    cache[string] = 1;
                } else {
                    const prev = `${i - 1},${j - 1}`;
                    cache[string] = 1 + cache[prev];
                }
            } else {
                const prev1 = `${i},${j - 1}`;
                const prev2 = `${i - 1},${j}`;
                if (j - 1 === -1 && i - 1 === -1) {
                    cache[string] = 0;
                } else if (j - 1 === -1) {
                    cache[string] = cache[prev2];
                } else if (i - 1 === -1) {
                    cache[string] = cache[prev1];
                } else {
                    cache[string] = Math.max(cache[prev1], cache[prev2]);
                }
            }
        }
    }

    const ans = `${text1.length - 1},${text2.length - 1}`;
    return cache[ans];
};