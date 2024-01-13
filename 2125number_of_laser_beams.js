// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

var numberOfBeams = function(bank) {
    let counts = Array(bank.length).fill();

    for (let i = 0; i < bank.length; i++) {
        let count = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === "1") {
                count++;
            }
        }
        counts[i] = count;
    }

    let tot = 0;

    for (let i = 0; i < counts.length; i++) {
        for (let j = i + 1; j < counts.length; j++) {
            tot += counts[i] * counts[j];
            if (counts[j] > 0) {
                break;
            }
        }
    }

    return tot;
};