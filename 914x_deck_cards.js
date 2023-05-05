// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

var hasGroupsSizeX = function (deck) {
    if (deck.length < 2) {
        return false;
    }
    let counts = {};
    for (let i = 0; i < deck.length; i++) {
        if (!counts[deck[i]]) {
            counts[deck[i]] = 1;
        } else {
            counts[deck[i]]++;
        }
    }
    const values = Object.values(counts);
    if (values.includes(1)) {
        return false;
    }
    let min = Math.min(...values);
    while (min > 1) {
        let allDivided = true;
        for (let i = 0; i < values.length; i++) {
            if (values[i] % min !== 0) {
                allDivided = false;
                break;
            }
        }
        if (allDivided) {
            return true;
        }
        min--;
    }
    return false;
};