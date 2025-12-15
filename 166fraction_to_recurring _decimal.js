// https://leetcode.com/problems/fraction-to-recurring-decimal/

var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }

    let ans = (numerator >= 0) ^ (denominator >= 0) ? ["-"] : [];

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    ans.push(Math.floor(num / den));

    num = num % den;

    if (num === 0) {
        return ans.join("");
    }

    ans.push(".");

    const map = new Map();

    map.set(num, ans.length);
    console.log(num, ans.length, ans)

    while (num !== 0) {
        num *= 10;
        ans.push(Math.floor(num / den));
        num = num % den;
        if (map.has(num)) {
            const ind = map.get(num);
            ans.splice(ind, 0, "(");
            ans.push(")");
            break;
        } else {
            map.set(num, ans.length);
        }
    }

    return ans.join("");
};