// https://leetcode.com/problems/goat-latin/

var toGoatLatin = function(sentence) {
    let split = sentence.split(' ');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    for (let i = 0; i < split.length; i++) {
        const first = split[i][0];
        if (!vowels.has(first)) {
            split[i] = split[i].slice(1) + first;
        }
        split[i] += 'ma';
        for (let j = 1; j <= i+1; j++) {
            split[i] += 'a';
        }
    }
    return split.join(' ');
};