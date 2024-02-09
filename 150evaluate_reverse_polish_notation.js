// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(first + second);
        } else if (tokens[i] === '-') {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(first - second);
        } else if (tokens[i] === '*') {
            const second = stack.pop();
            const first = stack.pop();
            stack.push(first * second);
        } else if (tokens[i] === '/') {
            const second = stack.pop();
            const first = stack.pop();
            const division = first / second;
            if (division < 0) {
                stack.push(Math.ceil(division));
            } else {
                stack.push(Math.floor(division));
            }
        } else {
            stack.push(Number(tokens[i]));
        }
    }

    return stack[0];
};


var evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let second;
        let first;
        switch (tokens[i]) {
            case "+":
                second = stack.pop();
                first = stack.pop();
                stack.push(first + second);
                break;
            case "-":
                second = stack.pop();
                first = stack.pop();
                stack.push(first - second);
                break;
            case "*":
                second = stack.pop();
                first = stack.pop();
                stack.push(first * second);
                break;
            case "/":
                second = stack.pop();
                first = stack.pop();
                stack.push(Math.trunc(first / second));
                break;
            default:
                stack.push(Number(tokens[i]));
        }
    }

    return stack[0];
};