// https://leetcode.com/problems/minimum-window-substring/

var minWindow = function (s, t) {
    if (t.length > s.length) {
        return "";
    }

    // Initialize an array to store the character counts. Length is 58 because there are upper and lower case characters. "A" has charcode 65, and "z" has charcode 122.
    const counts = Array(58).fill(0);
    const set = new Set(t);

    // For each character in t, increase the count.
    for (let i = 0; i < t.length; i++) {
        counts[t.charCodeAt(i) - 65]++;
    }

    // The left pointer
    let start = 0;
    let minWindowStart = 0;
    let minWindowEnd = Infinity;
    // The number of unique characters satisfied 
    let formed = 0;

    for (let i = 0; i < s.length; i++) {
        // If the character in s is not present in t, move on.
        if (!set.has(s[i])) continue;

        // Reduce the count
        counts[s.charCodeAt(i) - 65]--;

        // If the required frequency of a character is met
        if (counts[s.charCodeAt(i) - 65] === 0) {
            formed++;
        }

        if (formed !== set.size) continue;

        // Only get here if all the character frequencies are met
        
        // Move the left pointer if the current character is not present in t or there are excess amounts of this character in the current substring
        while (!set.has(s[start]) || counts[s.charCodeAt(start) - 65] < 0) {
            if (counts[s.charCodeAt(start) - 65] < 0) {
                counts[s.charCodeAt(start) - 65]++;
            }
            start++;
        }

        // If the new substring is shorter than the current result, update the current result.
        if (minWindowEnd - minWindowStart > i - start + 1) {
            minWindowStart = start;
            minWindowEnd = i + 1;
        }
    }

    return minWindowEnd === Infinity ? "" : s.slice(minWindowStart, minWindowEnd);
};


// var minWindow = function(s, t) {
//     if (t.length > s.length) return "";

//     const target = new Map();

//     for (let i = 0; i < t.length; i++) {
//         target.set(t[i], (target.get(t[i]) + 1) || 1);
//     }

//     let resIndexes = [0, Infinity];

//     const count = new Map();
//     let countNum = 0;

//     let left = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (target.has(s[i])) {
//             count.set(s[i], (count.get(s[i]) + 1) || 1);
//             if (count.get(s[i]) === target.get(s[i])) {
//                 countNum++;
//             }
//         }

//         while (left < s.length && (!target.has(s[left]) || count.get(s[left]) > target.get(s[left]))) {
//             if (target.has(s[left])) {
//                 count.set(s[left], count.get(s[left]) - 1);
//             } 
//             left++;
//         }

//         if (countNum === target.size) {
//             const currWindow = i - left + 1;
//             if (currWindow < resIndexes[1] - resIndexes[0] + 1) {
//                 resIndexes = [left, i];
//             } 
//         }
//     }

//     return resIndexes[1] - resIndexes[0] < Infinity ? s.slice(resIndexes[0], resIndexes[1] + 1) : "";
// };


// var minWindow = function(s, t) {
//     if (t.length > s.length) return "";

//     const target = new Map();

//     for (let i = 0; i < t.length; i++) {
//         target.set(t[i], (target.get(t[i]) + 1) || 1);
//     }

//     let res = "";

//     const count = new Map();

//     let left = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (target.has(s[i])) {
//             count.set(s[i], (count.get(s[i]) + 1) || 1);
//         }

//         let add = true;
        
//         for (const [letter, freq] of target) {
//             if (freq > (count.get(letter) || 0)) {
//                 add = false;
//                 break;
//             }
//         }

//         while (left < s.length && (!target.has(s[left]) || count.get(s[left]) > target.get(s[left]))) {
//             if (target.has(s[left])) {
//                 count.set(s[left], count.get(s[left]) - 1);
//             } 
//             left++;
//         }

//         if (add) {
//             const substring = s.slice(left, i + 1);
//             if (res.length === 0 || substring.length < res.length) {
//                 res = substring;
//             }
//         }
//     }

//     return res;
// };