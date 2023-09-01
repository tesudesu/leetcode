// https://leetcode.com/problems/furthest-point-from-origin/

var furthestDistanceFromOrigin = function(moves) {
    let lefts = 0;
    let rights = 0;
    let unders = 0;

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L") {
            lefts++;
        } else if (moves[i] === "R") {
            rights++;
        } else {
            unders++;
        }
    }

    if (lefts >= rights) {
        return lefts - rights + unders;
    } else {
        return rights - lefts + unders;
    }
};