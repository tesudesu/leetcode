// https://leetcode.com/problems/baseball-game/

var calPoints = function(operations) {
    let arr = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == '+') {
            arr.push(arr[arr.length-1] + arr[arr.length-2]);
        } else if (operations[i] == 'D') {
            arr.push(arr[arr.length-1] * 2);
        } else if (operations[i] == 'C') {
            arr.pop();
        } else {
            arr.push(Number(operations[i]));
        }
    }
    let tot = 0;
    for (let i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    return tot;
};