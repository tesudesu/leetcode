// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

var canBeTypedWords = function(text, brokenLetters) {
    const words = text.split(" ");
    const broken = new Set(brokenLetters);

    let ans = 0;

    for (const word of words) {
        let canType = true;
        for (let i = 0; i < word.length; i++) {
            if (broken.has(word[i])) {
                canType = false;
                break;
            }
        }
        if (canType) {
            ans++;
        }
    }

    return ans;
};