// https://leetcode.com/problems/rank-teams-by-votes/

var rankTeams = function(votes) {
    const teamToIndex = {};
    const indexToTeam = {};

    for (let i = 0; i < votes[0].length; i++) {
        teamToIndex[votes[0][i]] = i;
        indexToTeam[i] = votes[0][i];
    }

    let counts = Array(votes[0].length).fill().map(() => Array(votes[0].length + 1).fill(0));

    for (let i = 0; i < votes.length; i++) {
        for (let j = 0; j < votes[0].length; j++) {
            const team = votes[i][j];
            const teamIndex = teamToIndex[team];
            counts[teamIndex][j]++;
        }
    }

    for (let i = 0; i < counts.length; i++) {
        counts[i][counts[0].length - 1] = i;
    }

    counts.sort((a, b) => {
        for (let i = 0; i < a.length - 1; i++) {
            if (b[i] < a[i]) {
                return -1;
            } else if (b[i] > a[i]) {
                return 1;
            }
        }
        if (indexToTeam[a[a.length - 1]] > indexToTeam[b[b.length - 1]]) {
            return 1;
        } else {
            return -1;
        }
    });

    let ans = "";

    for (let i = 0; i < counts.length; i++) {
        const teamIndex = counts[i][counts[0].length - 1];
        const team = indexToTeam[teamIndex];
        ans += team;
    }

    return ans;
};