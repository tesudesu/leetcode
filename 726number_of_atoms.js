// https://leetcode.com/problems/number-of-atoms/

var countOfAtoms = function(formula) {
    let stack = [];
    stack.push(new Map());

    let i = 0; 

    while (i < formula.length) {
        if (formula[i] === "(") {
            stack.push(new Map());
            i++;
        } else if (formula[i] === ")") {
            let multiplier = 0;
            i++;
            while (formula.charCodeAt(i) >= 48 && formula.charCodeAt(i) <= 57) {
                multiplier = multiplier * 10 + Number(formula[i]);
                i++;
            }
            if (multiplier === 0) {
                multiplier = 1;
            }
            let map = stack.pop();
            for (const [element, count] of map) {
                map.set(element, map.get(element) * multiplier);
            }
            let prev = stack[stack.length - 1];
            for (const [element, count] of map) {
                if (prev.has(element)) {
                    prev.set(element, prev.get(element) + count);
                } else {
                    prev.set(element, count);
                }
            }
        } else {
            let map = stack[stack.length - 1];
            let element = formula[i];
            i++;
            while (formula.charCodeAt(i) >= 97 && formula.charCodeAt(i) <= 122) {
                element += formula[i];
                i++;
            }
            let multiplier = 0;
            while (formula.charCodeAt(i) >= 48 && formula.charCodeAt(i) <= 57) {
                multiplier = multiplier * 10 + Number(formula[i]);
                i++;
            }
            if (multiplier === 0) {
                multiplier = 1;
            }
            map.set(element, (map.get(element) + multiplier) || multiplier);
        }
    }

    let ans = "";

    let counts = [...stack[stack.length - 1]];
    counts.sort();

    for (const [element, count] of counts) {
        ans += element;
        if (count > 1) {
            ans += count;
        }
    }

    return ans;
};