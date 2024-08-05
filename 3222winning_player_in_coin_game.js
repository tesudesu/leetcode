// https://leetcode.com/problems/find-the-winning-player-in-coin-game/

var losingPlayer = function(x, y) {
    let alice = 1;
    while (true) {
        if (x > 0 && y >= 4) {
            x--;
            y -= 4;
            alice *= -1;
            continue;
        } 
        if (alice === 1) {
            return "Bob";
        } else {
            return "Alice";
        }
    }
};