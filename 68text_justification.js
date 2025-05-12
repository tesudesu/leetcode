// https://leetcode.com/problems/text-justification/

var fullJustify = function(words, maxWidth) {
    let ans = [];

    let currWordsLength = 0;
    let curr = [];

    let i = 0;

    while (i < words.length) {
        if (words[i].length + currWordsLength + curr.length <= maxWidth) {
            curr.push(words[i]);
            currWordsLength += words[i].length;
            i++;
            continue;
        }
        let line = [];
        let spaces = maxWidth - currWordsLength;
        let separatorLength;
        let remainder;
        if (curr.length > 1) {
            separatorLength = Math.floor(spaces / (curr.length - 1));
            remainder = spaces % (curr.length - 1);
        } else {
            separatorLength = spaces;
            remainder = 0;
        }

        for (let j = 0; j < curr.length; j++) {
            line.push(curr[j]);
            if (spaces > 0) {
                line.push(" ".repeat(separatorLength));
                spaces -= separatorLength;
                if (remainder > 0) {
                    line.push(" ");
                    remainder--;
                    spaces--;
                }
            }
        }
        ans.push(line.join(""));
        curr = [];
        currWordsLength = 0;
    }

    if (curr.length > 0) {
        let line = [];
        let spaces = maxWidth - currWordsLength;
        for (let j = 0; j < curr.length; j++) {
            line.push(curr[j]);
            if (spaces > 0) {
                line.push(" ");
                spaces--;
            }
        }
        line.push(" ".repeat(spaces));
        ans.push(line.join(""));
    }

    return ans;
};