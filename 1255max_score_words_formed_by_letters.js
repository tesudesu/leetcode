// https://leetcode.com/problems/maximum-score-words-formed-by-letters/

var maxScoreWords = function(words, letters, score) {
    const counts = Array(26).fill(0);

    for (const letter of letters) {
        counts[letter.charCodeAt(0) - 97]++;
    }

    let max = 0;

    const dfs = (i, currScore) => {
        if (i === words.length) {
            max = Math.max(max, currScore);
            return;
        }

        let canInclude = true;
        let includeScore = 0;

        for (const char of words[i]) {
            counts[char.charCodeAt(0) - 97]--;
            includeScore += score[char.charCodeAt(0) - 97];
            if (counts[char.charCodeAt(0) - 97] < 0) {
                canInclude = false;
            }
        }

        if (canInclude) {
            dfs(i + 1, currScore + includeScore);
        }

        for (const char of words[i]) {
            counts[char.charCodeAt(0) - 97]++;
        }

        dfs(i + 1, currScore);
    }

    dfs(0, 0);

    return max;
};