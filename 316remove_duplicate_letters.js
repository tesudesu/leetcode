// https://leetcode.com/problems/remove-duplicate-letters/

var removeDuplicateLetters = function(s) {
    let freq = {};

    for (let i = 0; i < s.length; i++) {
        freq[s[i]] = (freq[s[i]] + 1) || 1;
    }

    let stack = [];
    let visited = new Set();

    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i])) {
            freq[s[i]] -= 1;
            continue;
        }

        while (s[i] < stack[stack.length - 1] && freq[stack[stack.length - 1]] > 1) {
            const popped = stack.pop();
            visited.delete(popped);
            freq[popped] -= 1;
        }

        stack.push(s[i]);
        visited.add(s[i]);
    }

    return stack.join("");
};


// var removeDuplicateLetters = function(s) {
//     if (s.length === 0) return "";

//     let freq = Array(26).fill(0);

//     let pos = 0;

//     for (let i = 0; i < s.length; i++) {
//         freq[s[i].charCodeAt(0) - 97]++;
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (s[i].charCodeAt(0) < s[pos].charCodeAt(0)) {
//             pos = i;
//         }
//         freq[s[i].charCodeAt(0) - 97]--;
//         if (freq[s[i].charCodeAt(0) - 97] === 0) break;
//     }

//     return s[pos] + removeDuplicateLetters(s.slice(pos + 1).replaceAll(s[pos], ""));
// };