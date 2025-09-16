// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/

var maxFreqSum = function(s) {
    const count = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - 97;
        count[code]++;
    }

    let maxVowelCount = 0;
    let maxConsonantCount = 0;

    for (let i = 0; i < count.length; i++) {
        const letter = String.fromCharCode(i + 97);
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ) {
            maxVowelCount = Math.max(maxVowelCount, count[i]);
        } else {
            maxConsonantCount = Math.max(maxConsonantCount, count[i]);
        }
    }

    return maxVowelCount + maxConsonantCount;
};