// https://leetcode.com/problems/cutting-ribbons/

var maxLength = function(ribbons, k) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < ribbons.length; i++) {
        sum += ribbons[i];
        max = Math.max(max, ribbons[i]);
    }

    if (k > sum) return 0;

    let start = 1;
    let end = max;
    let ans = start;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);
        let count = 0;

        for (let i = 0; i < ribbons.length; i++) {
            count += Math.floor(ribbons[i] / mid);
        }

        if (count >= k) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }

    return ans;
};