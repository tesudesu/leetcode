// https://leetcode.com/problems/double-modular-exponentiation/

var getGoodIndices = function(variables, target) {
    let ans = [];

    for (let i = 0; i < variables.length; i++) {
        const [a, b, c, m] = variables[i];
        const lastDigitA = a % 10;
        let firstPart = lastDigitA;
        for (let i = 1; i < b; i++) {
            firstPart *= lastDigitA;
            firstPart = firstPart % 10;
        }

        let secondPart = firstPart;
        for (let i = 1; i < c; i++) {
            secondPart = (secondPart * firstPart) % m;
        }

        if (secondPart % m === target) {
            ans.push(i);
        }
    }

    return ans;
};