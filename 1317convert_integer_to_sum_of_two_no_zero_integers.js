// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

var getNoZeroIntegers = function(n) {
    const hasZero = (num) => {
        while (num > 0) {
            let digit = num % 10;
            if (digit === 0) {
                return true;
            }
            num = Math.floor(num / 10);
        }
        return false;
    }

    for (let i = 1; i < n; i++) {
        if (hasZero(i)) continue;
        if (hasZero(n - i)) continue;
        return [i, n - i];
    }
};