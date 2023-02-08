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