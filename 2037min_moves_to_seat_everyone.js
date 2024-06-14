// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let tot = 0;

    for (let i = 0; i < seats.length; i++) {
        tot += Math.abs(seats[i] - students[i]);
    }

    return tot;
};