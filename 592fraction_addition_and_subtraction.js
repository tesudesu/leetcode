// https://leetcode.com/problems/fraction-addition-and-subtraction/

var fractionAddition = function(expression) {
    let num = 0;
    let den = 1;

    let fractions = expression.split(/\/|(?=[+-])/);

    for (let i = 0; i < fractions.length; i += 2) {
        let top = fractions[i];
        let bottom = fractions[i + 1];

        num = num * bottom + top * den;
        den *= bottom;
    }

    if (num === 0) {
        return "0/1";
    }

    const findGCD = (a, b) => {
        if (a === 0) return b;
        return findGCD(b % a, a);
    }

    let gcd = Math.abs(findGCD(num, den));

    return num / gcd + "/" + den / gcd;
};


// var fractionAddition = function(expression) {
//     let num = 0;
//     let den = 1;

//     let fractions = expression.split(/\/|(?=[+-])/);

//     for (let i = 0; i < fractions.length; i += 2) {
//         let top = fractions[i];
//         let bottom = fractions[i + 1];

//         num = num * bottom + top * den;
//         den *= bottom;
//     }

//     if (num === 0) {
//         return "0/1";
//     }

//     let max = Math.min(Math.abs(num), Math.abs(den));

//     for (let i = max; i >= 1; i--) {
//         if (num % i === 0 && den % i === 0) {
//             num /= i;
//             den /= i;
//             break;
//         }
//     }

//     return num + "/" + den;
// };