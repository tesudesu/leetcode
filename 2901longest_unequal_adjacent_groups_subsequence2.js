// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/

var getWordsInLongestSubsequence = function (words, groups) {
    const n = words.length;
    const hammingDistance = Array(n).fill().map(() => Array(n).fill());
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let equalsOne = calculateHammingDistance(words[i], words[j]);
            hammingDistance[i][j] = equalsOne;
            hammingDistance[j][i] = equalsOne;
        }
    }

    let max = 0;
    let index = 0;
    const dp = Array(n).fill(1);
    const prev = Array(n).fill(-1);

    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (groups[i] !== groups[j] && words[i].length === words[j].length && hammingDistance[i][j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                    if (dp[i] > max) {
                        max = dp[i];
                        index = i;
                    }
                }
            }
        }
    }

    let ans = [];

    while (index !== -1) {
        ans.push(words[index]);
        index = prev[index];
    }

    return ans.reverse();
};

const calculateHammingDistance = (word1, word2) => {
    let differ = false;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            if (!differ) {
                differ = true;
            } else {
                return false;
            }
        }
    }
    return differ;
}