// https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function(moves) {
    let UD = 0;
    let RL = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == 'U') {
            UD++
        } else if (moves[i] == 'D') {
            UD--;
        } else if (moves[i] == 'R') {
            RL++;
        } else {
            RL--;
        }
    }
    return UD == 0 && RL == 0;
};