// https://leetcode.com/problems/valid-parenthesis-string/

// 2 stacks

var checkValidString = function(s) {
    let openStack = [];
    let starStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            openStack.push(i);
        } else if (s[i] === "*") {
            starStack.push(i);
        } else {
            if (openStack.length > 0) {
                openStack.pop();
            } else if (starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = 0;
    let j = 0;

    while (i < openStack.length && j < starStack.length) {
        if (starStack[j] > openStack[i]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === openStack.length;
};


var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            leftMin++;
            leftMax++;
        } else if (s[i] === ")") {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }
        if (leftMax < 0) {
            return false;
        }
        if (leftMin < 0) {
            leftMin = 0;
        }
    }

    return leftMin === 0;
};


var checkValidString = function(s) {
    let openCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "*") {
            openCount++;
        } else {
            openCount--;
        }
        if (openCount < 0) {
            return false;
        }
    }

    let closeCount = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ")" || s[i] === "*") {
            closeCount++;
        } else {
            closeCount--;
        }
        if (closeCount < 0) {
            return false;
        }
    }

    return true;
};


// DP

var checkValidString = function(s) {
    const cache = Array(s.length).fill().map(() => Array(s.length + 1).fill(-1));
    
    const dp = (i, open) => {
        if (i === s.length) {
            return (open === 0);
        }

        if (open < 0) {
            return false;
        }

        if (cache[i][open] !== -1) {
            return cache[i][open];
        }

        let isValid;

        if (s[i] === "(") {
            isValid = dp(i + 1, open + 1);
        } else if (s[i] === ")") {
            isValid = dp(i + 1, open - 1);
        } else {
            isValid = dp(i + 1, open + 1) || dp(i + 1, open) || dp(i + 1, open - 1);
        }

        cache[i][open] = isValid;

        return isValid;
    }

    return dp(0, 0);
};