// https://leetcode.com/problems/apple-redistribution-into-boxes/

var minimumBoxes = function(apple, capacity) {
    let tot = 0;

    for (let i = 0; i < apple.length; i++) {
        tot += apple[i];
    }

    capacity.sort((a, b) => b - a);

    for (let i = 0; i < capacity.length; i++) {
        tot -= capacity[i];
        if (tot <= 0) {
            return i + 1;
        }
    }
};