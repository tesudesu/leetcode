// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

// Arithmetic sequence

var totalMoney = function (n) {
    const firstWeek = 1 + 2 + 3 + 4 + 5 + 6 + 7;
    const weeks = Math.floor(n / 7);
    const lastWeek = firstWeek + (weeks - 1) * 7;
    const remain = n % 7;
    let tot = (weeks / 2) * (firstWeek + lastWeek);

    for (let i = 1; i <= remain; i++) {
        tot += i + weeks;
    }

    return tot;
};


// var totalMoney = function (n) {
//     const oneWeek = 1 + 2 + 3 + 4 + 5 + 6 + 7;
//     const weeks = Math.floor(n / 7);
//     const remain = n % 7;
//     let tot = oneWeek * weeks;

//     for (let i = 0; i < weeks; i++) {
//         tot += (i * 7);
//     }

//     for (let i = 1; i <= remain; i++) {
//         tot += i + weeks;
//     }

//     return tot;
// };


// Simulation

var totalMoney = function(n) {
    let curr = 1;
    let week = 0;
    let tot = 0;

    for (let i = 1; i <= n; i++) {
        if ((i - 1) % 7 === 0) {
            week++;
            curr = week;
        }
        tot += curr;
        curr++;
    }

    return tot;
};