// https://leetcode.com/problems/count-number-of-homogenous-substrings/

var countHomogenous = function(s) {
    let tot = 0;
    let currLength = 1;

    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            currLength++;
        } else {
            tot = (tot + currLength * (currLength + 1) / 2) % (1e9 + 7);
            currLength = 1;
        }
    }

    return tot;
};


// var countHomogenous = function(s) {
//     const substringLengths = new Map();
    
//     let currLength = 1;

//     for (let i = 1; i <= s.length; i++) {
//         if (s[i] === s[i - 1]) {
//             currLength++;
//         } else {
//             substringLengths.set(currLength, (substringLengths.get(currLength) + 1) || 1);
//             currLength = 1;
//         }
//     }

//     let tot = 0;

//     for (const [length, num] of substringLengths) {
//         let substrings = length * (length + 1) / 2;
//         substrings *= num;
//         tot += substrings % (1e9 + 7);
//     }

//     return tot;
// };