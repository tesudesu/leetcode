// https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/

var findIndices = function(nums, indexDifference, valueDifference) {
    let mapped = nums.map((a, i) => [a, i]);

    mapped.sort((a, b) => a[0] - b[0]);

    let left = 0;

    for (let i = 0; i < mapped.length; i++) {
        if (left >= mapped.length) return [-1, -1];
        if (Math.abs(mapped[i][0] - mapped[left][0]) >= valueDifference && Math.abs(mapped[i][1] - mapped[left][1]) >= indexDifference) {
            return [mapped[i][1], mapped[left][1]];
        }
        if (Math.abs(mapped[i][0] - mapped[left][0]) < valueDifference) {
            continue;
        }
        if (Math.abs(mapped[i][1] - mapped[left][1]) < indexDifference) {
            left++;
            i--;
        }
    }

    left = 0;

    for (let i = 0; i < mapped.length; i++) {
        if (left >= mapped.length) return [-1, -1];
        if (Math.abs(mapped[i][0] - mapped[left][0]) >= valueDifference && Math.abs(mapped[i][1] - mapped[left][1]) >= indexDifference) {
            return [mapped[i][1], mapped[left][1]];
        }
        if (Math.abs(mapped[i][0] - mapped[left][0]) < valueDifference) {
            continue;
        }
        if (Math.abs(mapped[i][0] - mapped[left][0]) >= valueDifference && Math.abs(mapped[i][1] - mapped[left][1]) < indexDifference) {
            continue;
        }
    }

    return [-1, -1];
};