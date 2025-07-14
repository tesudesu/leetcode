// https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/

var minimumDeletions = function(word, k) {
    let count = Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i) - 97;
        count[code]++;
    }

    count.sort((a, b) => a - b);

    let sum = 0;
    let min = Infinity;

    for (let i = 0; i < count.length; i++) {
        let tot = 0;
        for (let j = i + 1; j < count.length; j++) {
            tot += Math.max(count[j] - count[i] - k, 0);
        }
        min = Math.min(tot + sum, min);
        sum += count[i];
    }
    
    return min;
};