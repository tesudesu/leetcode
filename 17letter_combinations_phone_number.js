// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    let ans = [];

    const backtrack = (curr, i) => {
        if (i === digits.length) {
            ans.push(curr);
            return;
        }
        const letters = map[digits[i]];
        for (let j = 0; j < letters.length; j++) {
            backtrack(curr + letters[j], i+1);
        }
    }

    backtrack("", 0);

    return ans;
};


// var letterCombinations = function(digits) {
//     if (digits.length === 0) return [];
//     let map = {
//         2: ["a", "b", "c"],
//         3: ["d", "e", "f"],
//         4: ["g", "h", "i"],
//         5: ["j", "k", "l"],
//         6: ["m", "n", "o"],
//         7: ["p", "q", "r", "s"],
//         8: ["t", "u", "v"],
//         9: ["w", "x", "y", "z"]
//     }

//     let ans = [...map[digits[0]]];

//     for (let i = 1; i < digits.length; i++) {
//         const letters = map[digits[i]];
//         const length = ans.length;
//         for (let j = 0; j < length; j++) {
//             const curr = ans.shift();
//             for (let k = 0; k < letters.length; k++) {
//                 ans.push(curr + letters[k]);
//             }
//         }
//     }

//     return ans;
// };


// var letterCombinations = function(digits) {
//     let letters = [];
//     let map = {
//         2: ["a", "b", "c"],
//         3: ["d", "e", "f"],
//         4: ["g", "h", "i"],
//         5: ["j", "k", "l"],
//         6: ["m", "n", "o"],
//         7: ["p", "q", "r", "s"],
//         8: ["t", "u", "v"],
//         9: ["w", "x", "y", "z"]
//     }

//     for (let i = 0; i < digits.length; i++) {
//         letters.push(map[digits[i]]);
//     }

//     let ans = [];

//     if (letters.length === 0) {
//         return ans;
//     } else if (letters.length === 1) {
//         return letters[0];
//     } else if (letters.length === 2) {
//         for (let i = 0; i < letters[0].length; i++) {
//             for (let j = 0; j < letters[1].length; j++) {
//                 let combo = letters[0][i] + letters[1][j];
//                 ans.push(combo);
//             }
//         }
//     } else if (letters.length === 3) {
//         for (let i = 0; i < letters[0].length; i++) {
//             for (let j = 0; j < letters[1].length; j++) {
//                 for (let k = 0; k < letters[2].length; k++) {
//                     let combo = letters[0][i] + letters[1][j] + letters[2][k];
//                     ans.push(combo);
//                 }
//             }
//         }
//     } else if (letters.length === 4) {
//         for (let i = 0; i < letters[0].length; i++) {
//             for (let j = 0; j < letters[1].length; j++) {
//                 for (let k = 0; k < letters[2].length; k++) { 
//                     for (let q = 0; q < letters[3].length; q++) {
//                         let combo = letters[0][i] + letters[1][j] + letters[2][k] + letters[3][q];
//                         ans.push(combo);
//                     }
//                 }
//             }
//         }
//     }
    
//     return ans;
// };