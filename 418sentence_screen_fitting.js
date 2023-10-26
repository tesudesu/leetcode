// https://leetcode.com/problems/sentence-screen-fitting/

var wordsTyping = function(sentence, rows, cols) {
    let sentenceIndex = 0;

    let i = 1;
    let j = 0;

    let ans = 0;

    while (i <= rows) {
        const wordLength = sentence[sentenceIndex].length;
        if (j + wordLength <= cols) {
            sentenceIndex++;
            j += wordLength + 1;
        } else {
            i++;
            j = 0;
        }
        if (sentenceIndex === sentence.length) {
            ans++;
            sentenceIndex = 0;
        }
    }
    
    return ans;
};