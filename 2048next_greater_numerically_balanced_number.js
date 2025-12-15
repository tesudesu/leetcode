// https://leetcode.com/problems/next-greater-numerically-balanced-number/

var nextBeautifulNumber = function(n) {
    const isBalanced = (num) => {
        const count = Array(10).fill(0);
        while (num > 0) {
            let dig = num % 10;
            count[dig]++;
            num = Math.floor(num / 10);
        }
        for (let i = 0; i < count.length; i++) {
            if (count[i] === 0) continue;
            if (i !== count[i]) return false;
        }
        return true;
    }

    let number = n + 1;
    while (!isBalanced(number)) {
        number++;
    }

    return number;
};