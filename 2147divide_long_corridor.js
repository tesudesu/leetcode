// https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/

var numberOfWays = function (corridor) {
    let currSeats = 0;
    let i = 0;
    let tot = 1;
    let countSeats = 0;

    while (i < corridor.length) {
        if (corridor[i] === "S") {
            countSeats++;
            currSeats++;
        }
        
        if (currSeats === 2) {
            currSeats = 0;
            let j = i + 1;
            let plants = 0;
            while (j < corridor.length) {
                if (corridor[j] === "P") {
                    plants++;
                    j++;
                } else {
                    tot = (tot * (plants + 1)) % (1e9 + 7);
                    j--;
                    break;
                }
            }
            i = j + 1;
        } else {
            i++;
        }
    }

    return countSeats > 0 && countSeats % 2 === 0 ? tot : 0;
};