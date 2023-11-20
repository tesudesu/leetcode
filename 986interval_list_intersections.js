// https://leetcode.com/problems/interval-list-intersections/

var intervalIntersection = function(firstList, secondList) {
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < firstList.length && j < secondList.length) {
        const [firstStart, firstEnd] = firstList[i];
        const [secondStart, secondEnd] = secondList[j];
        let max = Math.max(firstStart, secondStart);
        let min = Math.min(firstEnd, secondEnd);
        if (min >= max) {
            ans.push([max, min]);
        }
        if (firstEnd > secondEnd) {
            j++;
        } else if (firstEnd < secondEnd) {
            i++;
        } else {
            i++;
            j++;
        }
    }

    return ans;
};