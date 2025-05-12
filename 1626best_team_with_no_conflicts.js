// https://leetcode.com/problems/best-team-with-no-conflicts/

var bestTeamScore = function(scores, ages) {
    let combined = ages.map((e, i) => [e, scores[i]]);

    combined.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    });

    const cache = Array(scores.length).fill().map(() => Array(scores.length).fill(-1));

    const dp = (i, lastHighestScoreIndex) => {
        if (i === scores.length) {
            return 0;
        }

        if (lastHighestScoreIndex >= 0 && cache[i][lastHighestScoreIndex] !== -1) {
            return cache[i][lastHighestScoreIndex];
        }

        let pick = 0;

        if (lastHighestScoreIndex === -1 || combined[i][1] >= combined[lastHighestScoreIndex][1]) {
            pick = dp(i + 1, i) + combined[i][1];
        } 

        let dontPick = dp(i + 1, lastHighestScoreIndex);

        cache[i][lastHighestScoreIndex] = Math.max(pick, dontPick);

        return cache[i][lastHighestScoreIndex];
    }

    return dp(0, -1);
};


var bestTeamScore = function(scores, ages) {
    let combined = ages.map((e, i) => [e, scores[i]]);

    combined.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    });

    let ans = Array(scores.length).fill(0);

    for (let i = 0; i < scores.length; i++) {
        ans[i] = combined[i][1];
        for (let j = 0; j < i; j++) {
            if (combined[i][1] >= combined[j][1]) {
                ans[i] = Math.max(ans[i], ans[j] + combined[i][1]);
            }
        }
    }

    return Math.max(...ans);
};