// https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/

var numWays = function(words, target) {
    const freq = Array(words[0].length).fill().map(() => Array(26).fill(0));
    const mod = 1e9 + 7;

    for (let i = 0; i < words[0].length; i++) {
        for (let j = 0; j < words.length; j++) {
            let charCode = words[j].charCodeAt(i) - 97;
            freq[i][charCode]++;
        }
    }

    const cache = Array(target.length + 1).fill().map(() => Array(words[0].length + 1).fill(-1));

    const dp = (targetIndex, wordIndex) => {
        if (targetIndex === target.length) {
            return 1;
        }
        if (wordIndex === words[0].length) {
            return 0;
        }

        if (cache[targetIndex][wordIndex] !== -1) {
            return cache[targetIndex][wordIndex];
        }

        let currCharCode = target.charCodeAt(targetIndex) - 97;

        let take = 0;

        if (freq[wordIndex][currCharCode] !== 0 ) {
            take = freq[wordIndex][currCharCode] * dp(targetIndex + 1, wordIndex + 1);
        }

        let noTake = dp(targetIndex, wordIndex + 1);

        let ans = (take + noTake) % mod;

        cache[targetIndex][wordIndex] = ans;

        return ans;
    }

    return dp(0, 0);
};