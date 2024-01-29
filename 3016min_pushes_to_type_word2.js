// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/

var minimumPushes = function(word) {
    let counts = Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
        counts[word.charCodeAt(i) - 97]++;
    }

    counts.sort((a, b) => b - a);

    let ans = 0;

    let k = 0;

    while (counts[k] > 0) {
        const pos = Math.ceil((k + 1) / 8);

        ans += pos * counts[k];
        k++;
    }

    return ans;
};


var minimumPushes = function(word) {
    let counts = Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
        counts[word.charCodeAt(i) - 97]++;
    }

    counts.sort((a, b) => b - a);

    let ans = 0;

    let k = 0;

    while (counts[k] > 0) {
        if (k <= 7) {
            ans += 1 * counts[k];
        } else if (k > 7 && k <= 15) {
            ans += 2 * counts[k];
        } else if (k > 15 && k <= 23) {
            ans += 3 * counts[k];
        } else {
            ans += 4 * counts[k];
        }
        k++;
    }

    return ans;
};