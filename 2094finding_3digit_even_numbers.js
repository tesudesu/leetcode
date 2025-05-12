// https://leetcode.com/problems/finding-3-digit-even-numbers/

var findEvenNumbers = function(digits) {
    let count = Array(10).fill(0);

    for (const dig of digits) {
        count[dig]++;
    }

    let ans = [];

    for (let i = 100; i <= 998; i += 2) {
        let num = i;
        let digit1 = num % 10;
        if (count[digit1] > 0) {
            count[digit1]--;
        } else {
            continue;
        }
        num = Math.floor(num / 10);
        let digit2 = num % 10;
        if (count[digit2] > 0) {
            count[digit2]--;
        } else {
            count[digit1]++;
            continue;
        }
        num = Math.floor(num / 10);
        let digit3 = num % 10;
        if (count[digit3] > 0) {
            ans.push(i);
        } 
        count[digit1]++;
        count[digit2]++;
    }

    return ans;
};


var findEvenNumbers = function(digits) {
    let ans = new Set();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || i === k || j === k || digits[i] === 0) continue;
                let num = digits[i] * 100;
                num += digits[j] * 10;
                num += digits[k];
                if (num % 2 === 0) {
                    ans.add(num);
                }
            }
        }
    }

    ans = [...ans];

    ans.sort((a, b) => a - b);

    return ans;
};