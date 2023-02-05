// https://leetcode.com/problems/keyboard-row/

var findWords = function(words) {
    const alphabets = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let fit;
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let contain = true;
        if (alphabets[0].includes(words[i][0].toLowerCase())) {
            fit = 0;
        } else if (alphabets[1].includes(words[i][0].toLowerCase())) {
            fit = 1;
        } else {
            fit = 2;
        }
        for (let j = 1; j < words[i].length; j++) {
            if (!alphabets[fit].includes(words[i][j].toLowerCase())) {
                contain = false;
                break;
            }
        }
        if (contain) {
            result.push(words[i]);
        }
    }
    return result;
};