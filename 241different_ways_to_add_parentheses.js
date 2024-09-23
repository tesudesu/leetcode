// https://leetcode.com/problems/different-ways-to-add-parentheses/

// Recursion with caching

var diffWaysToCompute = function(expression) {
    expression = expression.split(/(\+|-|\*)/g);
    const ops = new Set(["+", "-", "*"]);
    const cache = Array(expression.length).fill().map(() => Array(expression.length).fill());

    const search = (left, right) => {
        if (cache[left][right]) {
            return cache[left][right];
        }
        let res = [];
        for (let i = left; i <= right; i++) {
            if (!ops.has(expression[i])) continue;

            let leftSide = search(left, i - 1);
            let rightSide = search(i + 1, right);
            
            for (const num1 of leftSide) {
                for (const num2 of rightSide) {
                    if (expression[i] === "+") {
                        res.push(num1 + num2);
                    } else if (expression[i] === "-") {
                        res.push(num1 - num2);
                    } else {
                        res.push(num1 * num2);
                    }
                }
            }
        }
        if (res.length === 0) {
            res = [Number(expression[left])]
        } 
        cache[left][right] = res;
        return res;
    }

    return search(0, expression.length - 1);
};