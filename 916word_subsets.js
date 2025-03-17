// https://leetcode.com/problems/word-subsets/

var wordSubsets = function(words1, words2) {
    let count2 = Array(26).fill(0);

    for (let word of words2) {
        let temp = Array(26).fill(0);
        for (let char of word) {
            let code = char.charCodeAt(0) - 97;
            temp[code]++;
        }
        for (let i = 0; i < 26; i++) {
            count2[i] = Math.max(count2[i], temp[i]);
        }
    }

    let ans = [];

    for (let word of words1) {
        let count = Array(26).fill(0);
        for (let char of word) {
            let code = char.charCodeAt(0) - 97;
            count[code]++;
        }

        let found = true;

        for (let i = 0; i < 26; i++) {
            if (count[i] < count2[i]) {
                found = false;
                break;
            }
        }

        if (found) {
            ans.push(word);
        }
    }

    return ans;
};