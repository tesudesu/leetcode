// https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/

var isWinner = function(player1, player2) {
    let sum1 = player1[0];
    let sum2 = player2[0];
    for (let i = 1; i < player1.length; i++) {
        if (player1[i-1] === 10 || player1[i-2] === 10) {
            sum1 += player1[i] * 2;
        } else {
            sum1 += player1[i];
        }
    }
    for (let i = 1; i < player2.length; i++) {
        if (player2[i-1] === 10 || player2[i-2] === 10) {
            sum2 += player2[i] * 2;
        } else {
            sum2 += player2[i];
        }
    }
    return sum1 > sum2 ? 1 : sum2 > sum1 ? 2 : 0;
};