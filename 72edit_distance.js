// https://leetcode.com/problems/edit-distance/

var minDistance = function(word1, word2) {
    let cache = Array(word2.length + 1).fill(0).map(row => Array(word1.length + 1).fill(0));

    for (let i = 0; i < cache.length; i++) {
        cache[i][cache[0].length - 1] = cache.length - i - 1;
    }

    for (let i = 0; i < cache[0].length - 1; i++) {
        cache[cache.length - 1][i] = cache[0].length - i - 1;
    }

    for (let i = cache.length - 2; i >= 0; i--) {
        for (let j = cache[0].length - 2; j >= 0; j--) {
            if (word1[j] === word2[i]) {
                cache[i][j] = cache[i+1][j+1];
            } else {
                cache[i][j] = 1 + Math.min(cache[i+1][j+1], cache[i+1][j], cache[i][j+1]);
            }
        }
    }

    return cache[0][0];
};