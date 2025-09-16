// https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/

var movesToMakeZigzag = function(nums) {
    let ans1 = 0;
    let ans2 = 0;

    let temp = [...nums];

    for (let i = 0; i < temp.length; i += 2) {
        if (i - 1 >= 0) {
            if (temp[i] <= temp[i - 1]) {
                ans1 += temp[i - 1] - temp[i] + 1;
                temp[i - 1] = temp[i] - 1;
            }
        } 

        if (i + 1 < temp.length) {
            if (temp[i] <= temp[i + 1]) {
                ans1 += temp[i + 1] - temp[i] + 1;
                temp[i + 1] = temp[i] - 1;
            }
        }
    }

    temp = [...nums];

    for (let i = 1; i < temp.length; i += 2) {
        if (i - 1 >= 0) {
            if (temp[i] <= temp[i - 1]) {
                ans2 += temp[i - 1] - temp[i] + 1;
                temp[i - 1] = temp[i] - 1;
            }
        } 

        if (i + 1 < temp.length) {
            if (temp[i] <= temp[i + 1]) {
                ans2 += temp[i + 1] - temp[i] + 1;
                temp[i + 1] = temp[i] - 1;
            }
        }
    }

    return Math.min(ans1, ans2);
};