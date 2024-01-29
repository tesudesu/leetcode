// https://leetcode.com/problems/find-players-with-zero-or-one-losses/

var findWinners = function(matches) {
    const players = new Set();
    const losses = new Map();

    for (const [winner, loser] of matches) {
        players.add(winner);
        players.add(loser);
        losses.set(loser, (losses.get(loser) || 0) + 1);
    }

    let notLost = [];
    let lostOne = [];

    for (const player of players) {
        if (!losses.has(player)) {
            notLost.push(player);
        }
    }

    for (const [player, num] of losses) {
        if (num === 1) {
            lostOne.push(player);
        }
    }

    notLost.sort((a, b) => a - b);
    lostOne.sort((a, b) => a - b);

    return [notLost, lostOne];
};