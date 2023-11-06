// https://leetcode.com/problems/basic-calculator-ii/

var calculate = function (s) {
    let stack = [Number(s[0])];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === " ") continue;

        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
            if (stack[stack.length - 1] !== "*" && stack[stack.length - 1] !== "/" && stack[stack.length - 1] !== "+" && stack[stack.length - 1] !== "-") {
                let num = stack.pop();
                stack.push((num * 10) + Number(s[i]));
            } else {
                stack.push(Number(s[i]));
            }
        } else {
            if (stack.length === 1 || stack[stack.length - 2] === "+" || stack[stack.length - 2] === "-") {
                stack.push(s[i]);
            } else {
                const second = stack.pop();
                const operator = stack.pop();
                const first = stack.pop();
                if (operator === "*") {
                    stack.push(first * second);
                } else {
                    stack.push(Math.floor(first / second));
                }
                stack.push(s[i]);
            }
        }
    }

    if (stack.length > 2 && (stack[stack.length - 2] === "*" || stack[stack.length - 2] === "/")) {
        const second = stack.pop();
        const operator = stack.pop();
        const first = stack.pop();
        if (operator === "*") {
            stack.push(first * second);
        } else {
            stack.push(Math.floor(first / second));
        }
    }

    let ans = stack[0];
    let prevOperator;

    for (let i = 1; i < stack.length; i++) {
        if (stack[i] === "+") {
            prevOperator = "+";
        } else if (stack[i] === "-") {
            prevOperator = "-";
        } else {
            if (prevOperator === "+") {
                ans += stack[i];
            } else {
                ans -= stack[i];
            }
        }
    }

    return ans;
};