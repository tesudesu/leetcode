// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length - 1;

    let char;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;
        if (letters[mid] > target) {
            char = letters[mid];
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return char ? char : letters[0];
};

// var nextGreatestLetter = function(letters, target) {
//     for (let i = 0; i < letters.length; i++) {
//         if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
//             return letters[i];
//         }
//     }
//     return letters[0];
// };