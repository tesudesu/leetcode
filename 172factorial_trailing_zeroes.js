// https://leetcode.com/problems/factorial-trailing-zeroes/

var trailingZeroes = function(n) {
    let twos = 0;
    let fives = 0;
    let tens = 0;

    for (let i = n; i >= 2; i--) {
        let num = i;
        if (num % 10 === 0) {
            while (num % 10 === 0) {
                tens++;
                num /= 10;
            }
            while (num % 5 === 0) {
                fives++;
                num /= 5;
            }
        } else if (num % 5 === 0) {
            while (num % 5 === 0) {
                fives++;
                num /= 5;
            }
        } else if (num % 2 === 0) {
            while (num % 2 === 0) {
                twos++;
                num /= 2;
            }
        }
    }
    
    return tens + Math.min(twos, fives);
};