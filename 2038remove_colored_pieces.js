// https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/

var winnerOfGame = function(colors) {
    let alice = [];
    let bob = [];

    let curr = 1;

    for (let i = 1; i <= colors.length; i++) {
        if (colors[i] === colors[i - 1]) {
            curr++;
        } else {
            if (colors[i - 1] === "A") {
                alice.push(curr);
            } else {
                bob.push(curr);
            }
            curr = 1;
        }
    }

    let aliceTurns = 0;
    let bobTurns = 0;

    for (let i = 0; i < alice.length; i++) {
        if (alice[i] >= 3) {
            aliceTurns += alice[i] - 2;
        }
    }

    for (let i = 0; i < bob.length; i++) {
        if (bob[i] >= 3) {
            bobTurns += bob[i] - 2;
        }
    }

    return aliceTurns > bobTurns;
};