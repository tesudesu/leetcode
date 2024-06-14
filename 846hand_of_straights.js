// https://leetcode.com/problems/hand-of-straights/

var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    
    const map = new Map();

    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) + 1) || 1);
    }

    for (let i = 0; i < hand.length; i++) {
        if (!map.has(hand[i])) {
            continue;
        }

        let startCard = hand[i];
        while (map.has(startCard - 1)) {
            startCard--;
        }

        for (let j = 0; j < groupSize; j++) {
            if (!map.has(startCard + j)) {
                return false;
            }
            map.set(startCard + j, map.get(startCard + j) - 1);
            if (map.get(startCard + j) === 0) {
                map.delete(startCard + j);
            }
        }
    }

    return true;
};


// Sorting

var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    
    const map = new Map();

    for (let i = 0; i < hand.length; i++) {
        map.set(hand[i], (map.get(hand[i]) + 1) || 1);
    }

    let keys = [...map.keys()];
    keys.sort((a, b) => a - b);

    let i = 0;

    while (i < keys.length) {
        if (!map.has(keys[i])) {
            i++;
            continue;
        }
        for (let j = 0; j < groupSize; j++) {
            if (!map.has(keys[i] + j)) {
                return false;
            }
            map.set(keys[i] + j, map.get(keys[i] + j) - 1);
            if (map.get(keys[i] + j) === 0) {
                map.delete(keys[i] + j);
            }
        }
    }

    return true;
};