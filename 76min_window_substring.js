// https://leetcode.com/problems/minimum-window-substring/

var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const target = new Map();

    for (let i = 0; i < t.length; i++) {
        target.set(t[i], (target.get(t[i]) + 1) || 1);
    }

    let resIndexes = [0, Infinity];

    const count = new Map();
    let countNum = 0;

    let left = 0;

    for (let i = 0; i < s.length; i++) {
        if (target.has(s[i])) {
            count.set(s[i], (count.get(s[i]) + 1) || 1);
            if (count.get(s[i]) === target.get(s[i])) {
                countNum++;
            }
        }

        while (left < s.length && (!target.has(s[left]) || count.get(s[left]) > target.get(s[left]))) {
            if (target.has(s[left])) {
                count.set(s[left], count.get(s[left]) - 1);
            } 
            left++;
        }

        if (countNum === target.size) {
            const currWindow = i - left + 1;
            if (currWindow < resIndexes[1] - resIndexes[0] + 1) {
                resIndexes = [left, i];
            } 
        }
    }

    return resIndexes[1] - resIndexes[0] < Infinity ? s.slice(resIndexes[0], resIndexes[1] + 1) : "";
};


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