// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/

var minSwaps = function(data) {
    let ones = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 1) {
            ones++;
        }
    }

    let swaps = 0;

    for (let i = 0; i < ones; i++) {
        if (data[i] === 0) {
            swaps++;
        }
    }

    let ans = swaps;

    for (let i = ones; i < data.length; i++) {
        if (data[i] === 0) {
            swaps++;
        }
        if (data[i - ones] === 0) {
            swaps--;
        }
        ans = Math.min(ans, swaps);
    }

    return ans;
};