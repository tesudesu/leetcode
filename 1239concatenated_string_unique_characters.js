// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

var maxLength = function (arr) {
    const combined = new Set();

    for (let i = 0; i < arr.length; i++) {
        const currSet = new Set(arr[i]);
        if (currSet.size !== arr[i].length) {
            continue;
        }
        for (const word of combined) {
            const wordSet = new Set(word);
            let found = true;
            for (const letter of currSet) {
                if (wordSet.has(letter)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                combined.add(word + arr[i]);
            }
        }
        combined.add(arr[i]);
    }

    let max = 0;

    for (const word of combined) {
        max = Math.max(max, word.length);
    }

    return max;
};