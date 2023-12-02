// https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/

var lexicographicallySmallestArray = function(nums, limit) {
    let sorted = nums.map((a, i) => [a, i]);
    sorted.sort((a, b) => a[0] - b[0]);

    let ans = Array(nums.length).fill();

    let i = 0;

    while (i < nums.length) {
        let start = i;
        i++;
        while (i < nums.length && sorted[i][0] - sorted[i - 1][0] <= limit) {
            i++;
        }
        let section = sorted.slice(start, i);
        section.sort((a, b) => a[1] - b[1]);
        for (let j = 0; j < section.length; j++) {
            ans[section[j][1]] = sorted[j + start][0];
        }
    }

    return ans;
};