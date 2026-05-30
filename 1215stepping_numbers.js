// https://leetcode.com/problems/stepping-numbers/

var countSteppingNumbers = function(low, high) {
    let ans = new Set();
    let curr = [];

    const bt = () => {
        let num = Number(curr.join(""));
        if (num >= low && num <= high) {
            ans.add(num);
        }
        if (num > high) {
            return;
        }

        let lastDigit = curr[curr.length - 1];
        if (lastDigit === 9) {
            curr.push(8);
            bt();
            curr.pop();
        } else if (lastDigit === 0) {
            curr.push(1);
            bt();
            curr.pop();
        } else {
            curr.push(lastDigit + 1);
            bt();
            curr.pop();
            curr.push(lastDigit - 1);
            bt();
            curr.pop();
        }
    }

    for (let i = 0; i <= 9; i++) {
        curr.push(i);
        bt();
        curr.pop();
    }

    ans = [...ans];
    ans.sort((a, b) => a - b);

    return ans;
};