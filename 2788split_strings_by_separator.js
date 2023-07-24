// https://leetcode.com/problems/split-strings-by-separator/

var splitWordsBySeparator = function(words, separator) {
    let ans = [];

    for (let i = 0; i < words.length; i++) {
        let split = words[i].split(separator);
        for (let j = 0; j < split.length; j++) {
            if (split[j].length > 0) {
                ans.push(split[j]);
            }
        }
    }

    return ans;
};