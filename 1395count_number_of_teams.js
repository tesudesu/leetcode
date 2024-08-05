// https://leetcode.com/problems/count-number-of-teams/

var numTeams = function(rating) {
    let tot = 0;

    const numSmaller = Array(rating.length).fill(0);
    const numBigger = Array(rating.length).fill(0);

    for (let i = rating.length - 2; i >= 0; i--) {
        let smaller = 0;
        let bigger = 0;
        for (let j = rating.length - 1; j > i; j--) {
            if (rating[j] < rating[i]) {
                smaller++;
                tot += numSmaller[j];
            }
            if (rating[j] > rating[i]) {
                bigger++;
                tot += numBigger[j];
            }
        }
        numSmaller[i] = smaller;
        numBigger[i] = bigger;
    }

    return tot;
};