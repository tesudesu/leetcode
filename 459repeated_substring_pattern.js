// https://leetcode.com/problems/repeated-substring-pattern/

var repeatedSubstringPattern = function(s) {
    if (s.length == 1) {
        return false;
    }
    let factors = [];
    const length = s.length;
    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(length)); i++) {
        if (length % i == 0) {
            factors.push(length/i);
            factors.push(i);
        }
    }
    for (let i = 1; i < factors.length; i++) {
        let sliced = s.slice(0, factors[i]);
        for (let j = 0; j < length; j += factors[i]) {
            if (s.indexOf(sliced, j) == j) {
                count++;
            }
        }
        if (count == length/factors[i]) {
            return true;
        }
        count = 0;
    }
    return false;
};

// var repeatedSubstringPattern = function(s) {
//     if (s.length == 1) {
//         return false;
//     }
//     let pattern = '';
//     for (let i = 0; i < s.length/2; i++) {
//         pattern = pattern + s[i];
//         let regex = new RegExp(`^(${pattern})+$`);
//         if (regex.test(s)) {
//             return true;
//         }
//     }
//     return false;
// };