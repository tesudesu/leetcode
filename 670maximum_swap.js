// https://leetcode.com/problems/maximum-swap/

var maximumSwap = function (num) {
    let nums = [];

    while (num > 0) {
        nums.push(num % 10);
        num = Math.floor(num / 10);
    }

    nums.reverse();

    let sorted = nums.slice();
    sorted = sorted.map((elem, ind) => [elem, ind]);
    sorted.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < sorted.length; i++) {
        if (nums[i] === sorted[i][0]) continue;

        let ind = sorted[i][1];

        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j][0] === sorted[i][0]) {
                ind = sorted[j][1];
            } else {
                break;
            }
        }

        const temp = nums[i];
        nums[i] = sorted[i][0];
        nums[ind] = temp;
        break;
    }

    let tot = 0;
    let factor = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        tot += nums[i] * factor;
        factor *= 10;
    }

    return tot;
};