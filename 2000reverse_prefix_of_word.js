// https://leetcode.com/problems/reverse-prefix-of-word/

var reversePrefix = function(word, ch) {
    word = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            let j = 0;
            let k = i;
            while (j < k) {
                const temp = word[j];
                word[j] = word[k];
                word[k] = temp;
                j++;
                k--;
            }
            break;
        }
    }
    return word.join("");
};