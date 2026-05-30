// https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/

var getHappyString = function(n, k) {
    let count = 0;
    let ans = "";
    let curr = [];

    const bt = () =>  {
        if (count >= k) {
            return;
        }
        
        if (curr.length === n) {
            count++;
            if (count === k) {
                ans = curr.join("");
            }
            return;
        }

        if (curr.length === 0) {
            curr.push("a");
            bt();
            curr.pop();
            curr.push("b");
            bt();
            curr.pop();
            curr.push("c");
            bt();
            curr.pop();
        } else if (curr[curr.length - 1] === "a") {
            curr.push("b");
            bt();
            curr.pop();
            curr.push("c");
            bt();
            curr.pop();
        } else if (curr[curr.length - 1] === "b") {
            curr.push("a");
            bt();
            curr.pop();
            curr.push("c");
            bt();
            curr.pop();
        } else {
            curr.push("a");
            bt();
            curr.pop();
            curr.push("b");
            bt();
            curr.pop();
        }
    }

    bt();

    return ans;
};