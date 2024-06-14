// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/

var numSteps = function(s) {
    let arr = s.split("");

    let steps = 0;

    while (arr.length > 1) {
        if (arr[arr.length - 1] === "0") {
            arr.pop();
        } else {
            let i = arr.length - 1;
            while (arr[i] === "1") {
                arr[i] = "0";
                i--;
            }
            if (i >= 0) {
                arr[i] = "1";
            } else {
                arr.unshift("1");
            }
        }

        steps++;
    }

    return steps;
};