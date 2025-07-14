// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/

var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => b - a);
    trainers.sort((a, b) => b - a);

    let i = 0;
    let j = 0;
    let tot = 0;

    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            tot++;
            j++;
            i++;
        } else {
            i++;
        }
    }

    return tot;
};