// https://leetcode.com/problems/unique-morse-code-words/

const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var uniqueMorseRepresentations = function(words) {
    let unique = new Set();
    for (let i = 0; i < words.length; i++){
        let temp = '';
        for (let j = 0; j < words[i].length; j++) {
            temp += morse[words[i].charCodeAt(j) - 97];
        }
        if (!unique.has(temp)) {
            unique.add(temp);
        }
    }
    return unique.size;
};