// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
    let ans = [];
    
    const backtrack = (arr, front, back) => {
        if (front === 0 && back === 0) {
            ans.push(arr.join(""));
            return;
        }

        if (front > 0) {
            arr.push("(");
            front--;
            backtrack(arr, front, back);
            arr.pop();
            front++;
        }
        
        if (back > front) {
            arr.push(")");
            back--;
            backtrack(arr, front, back);
            arr.pop();
            back++;
        }
    }

    backtrack([], n, n);

    return ans;
};