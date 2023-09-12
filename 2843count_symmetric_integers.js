// https://leetcode.com/problems/count-symmetric-integers/

var countSymmetricIntegers = function(low, high) {
    let tot = 0;

    for (let i = low; i <= high; i++) {
        let digits = [];
        let num = i;
        
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }

        if (digits.length % 2 !== 0) continue;

        let mid = digits.length / 2;
        let side1 = 0
        let side2 = 0;

        for (let i = 0; i < mid; i++) {
            side1 += digits[i];
        }

        for (let i = mid; i < digits.length; i++) {
            side2 += digits[i];
        }

        if (side1 === side2) tot++;
    }

    return tot;
};