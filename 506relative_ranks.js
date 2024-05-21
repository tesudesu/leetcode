// https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function(score) {
    let map = {};
    for (let i = 0; i < score.length; i++) {
        map[score[i]] = i;
    }
    score.sort((a, b) => b - a);
    let result = [];
    result[map[score[0]]] = "Gold Medal";
    result[map[score[1]]] = "Silver Medal";
    result[map[score[2]]] = "Bronze Medal";
    for (let i = 3; i < score.length; i++) {
        result[map[score[i]]] = `${i+1}`;
    }
    return result;
};


var findRelativeRanks = function(score) {
    let mapped = score.map((e, ind) => [e, ind]);
    mapped.sort((a, b) => b[0] - a[0]);

    const ans = Array(score.length).fill();

    for (let i = 0; i < mapped.length; i++) {
        const [num, originalIndex] = mapped[i];
        if (i === 0) {
            ans[originalIndex] = "Gold Medal";
        } else if (i === 1) {
            ans[originalIndex] = "Silver Medal";
        } else if (i === 2) {
            ans[originalIndex] = "Bronze Medal";
        } else {
            ans[originalIndex] = String(i + 1);
        }
    }

    return ans;
};