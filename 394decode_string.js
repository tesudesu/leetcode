// https://leetcode.com/problems/decode-string/

var decodeString = function(s) {
    let stack = [];
    let num = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] == Number(s[i])) {
            num += s[i];
            continue;
        } else if (num) {
            stack.push(Number(num));
            num = "";
        }

        if (s[i] === "]") {
            let phrase = "";
            while (stack[stack.length - 1] !== "[") {
                phrase = stack.pop() + phrase;
            }
            stack.pop();

            let multiplier = stack.pop();

            phrase = phrase.repeat(multiplier);

            for (let i = 0; i < phrase.length; i++) {
                stack.push(phrase[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
};