// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
            return letters[i];
        }
    }
    return letters[0];
};