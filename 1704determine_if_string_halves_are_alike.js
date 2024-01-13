// https://leetcode.com/problems/determine-if-string-halves-are-alike/

var halvesAreAlike = function(s) {
    const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < s.length / 2; i++) {
        if (vowels.has(s[i])) {
            count1++;
        }
    }

    for (let i = s.length / 2; i < s.length; i++) {
        if (vowels.has(s[i])) {
            count2++;
        }
    }

    return count1 === count2;
};