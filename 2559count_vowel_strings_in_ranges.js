// https://leetcode.com/problems/count-vowel-strings-in-ranges/

var vowelStrings = function(words, queries) {
    let isVowel = Array(words.length).fill(0);
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    for (let i = 0; i < words.length; i++) {
        if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])) {
            isVowel[i] = 1;
        }
    }

    let prefixSum = Array(words.length).fill(0);
    prefixSum[0] = isVowel[0];

    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + isVowel[i];
    }

    let ans = Array(queries.length).fill();

    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] - 1 < 0) {
            ans[i] = prefixSum[queries[i][1]];
        } else {
            ans[i] = prefixSum[queries[i][1]] - prefixSum[queries[i][0] - 1];
        }
    }

    return ans;
};