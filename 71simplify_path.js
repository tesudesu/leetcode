// https://leetcode.com/problems/simplify-path/

var simplifyPath = function(path) {
    let stack = [];
    let curr = "";
    
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "/") {
            if (curr === "/..") {
                stack.pop();
            } else if (i !== 0 && curr !== "/." && curr[curr.length - 1] !== "/") {
                stack.push(curr);
            }
            curr = "";
        }
        curr += path[i];
    }

    if (curr === "/..") {
        stack.pop();
    } else if (curr !== "/." && curr !== "/") {
        stack.push(curr);
    }

    const ans = stack.join("");

    return ans.length > 0 ? ans : "/";
};