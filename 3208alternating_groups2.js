// https://leetcode.com/problems/alternating-groups-ii/

var numberOfAlternatingGroups = function(colors, k) {
    let tot = 0;
    const n = colors.length;

    let left = 0;

    for (let i = 1; i < n + k - 1; i++) {
        if (colors[i % n] !== colors[(i - 1) % n]) {
            if (i - left + 1 > k) {
                left++;
            }
            if (i - left + 1 === k) {
                tot++;
            }
        } else {
            left = i;
        }
    }

    return tot;
};