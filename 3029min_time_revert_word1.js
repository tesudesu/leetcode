// https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/

var minimumTimeToInitialState = function(word, k) {
    let count = 1;
    let newWord = word.slice(k) + "0".repeat(k);
    const max = Math.floor(word.length / k);

    for (let i = 0; i < max; i++) {
        let matched = true;

        for (let j = 0; j < newWord.length; j++) {
            if (newWord[j] === "0") {
                break;
            }
            if (newWord[j] !== word[j]) {
                matched = false;
                break;
            }
        }

        if (matched) {
            return count;
        } else {
            newWord = newWord.slice(k) + "0".repeat(k);
            count++;
        }
    }

    return count;
};