// https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/

var equalDigitFrequency = function(s) {
    let digits = Array(s.length).fill();

    for (let i = 0; i < s.length; i++) {
        digits[i] = Number(s[i]);
    }

    let set = new Set();

    for (let i = 0; i < digits.length; i++) {
        let count = Array(10).fill(0);
        for (let j = i; j < digits.length; j++) {
            count[digits[j]]++;
            let num = 0;
            let add = true;
            for (let k = 0; k < 10; k++) {
                if (count[k] === 0) continue;
                if (num === 0) {
                    num = count[k];
                } else if (num !== count[k]) {
                    add = false;
                    break;
                }
            }
            if (add) {
                set.add(s.slice(i, j + 1));
            } 
        }
    }

    return set.size;
};