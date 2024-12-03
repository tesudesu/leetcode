// https://leetcode.com/problems/defuse-the-bomb/

var decrypt = function(code, k) {
    if (k === 0) {
        return Array(code.length).fill(0);
    }
    
    const ans = Array(code.length).fill();
    
    let sum = 0;

    const length = Math.abs(k);

    for (let i = 1; i <= length; i++) {
        if (k > 0) {
            sum += code[i];
        } else {
            sum += code[code.length - i];
        }
    }

    ans[0] = sum;

    for (let i = 1; i < code.length; i++) {
        if (k > 0) {
            sum += code[(i + k) % code.length];
            sum -= code[i];
        } else {
            sum += code[(i - 1 + code.length) % code.length]; 
            sum -= code[(i + k - 1 + code.length) % code.length];
        }

        ans[i] = sum;
    }

    return ans;
};