// https://leetcode.com/problems/most-common-word/

var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().match(/\w+/g);
    let freq = {};
    let max = 0;
    let ans = '';
    for (let i = 0; i < words.length; i++) {
        let isbanned = false;
        for (let j = 0; j < banned.length; j++) {
            if (words[i] === banned[j]) {
                isbanned = true;
                break;
            }
        }
        if (!isbanned) {
            if (!freq[words[i]]) {
                freq[words[i]] = 1;
            } else {
                freq[words[i]]++;
            }
            if (freq[words[i]] > max) {
                max = freq[words[i]];
                ans = words[i];
            }
        }
    }
    return ans;
};