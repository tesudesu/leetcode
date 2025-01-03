// https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/

var findScore = function(nums) {
    const marked = Array(nums.length).fill(false);

    let sorted = [...nums];
    sorted = sorted.map((e, i) => [e, i]);
    sorted.sort((a, b) => a[0] - b[0]);

    let score = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (marked[sorted[i][1]]) {
            continue;
        }
        score += sorted[i][0];
        marked[sorted[i][1]] = true;
        if (sorted[i][1] - 1 >= 0) {
            marked[sorted[i][1] - 1] = true;
        }
        if (sorted[i][1] + 1 < nums.length) {
            marked[sorted[i][1] + 1] = true;
        }
    }

    return score;
};