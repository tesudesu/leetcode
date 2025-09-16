// https://leetcode.com/problems/campus-bikes-ii/

var assignBikes = function(workers, bikes) {
    const dist = Array(workers.length).fill().map(() => Array(bikes.length).fill());

    for (let i = 0; i < workers.length; i++) {
        for (let j = 0; j < bikes.length; j++) {
            const dis = Math.abs(workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1]);
            dist[i][j] = dis;
        }
    }

    let min = Infinity;
    let takenBikes = Array(bikes.length).fill(false);
    let curr = 0;

    const assign = (i) => {
        if (i === workers.length) {
            min = Math.min(min, curr);
            return;
        }

        for (let j = 0; j < bikes.length; j++) {
            if (takenBikes[j]) continue;
            takenBikes[j] = true;
            curr += dist[i][j];
            assign(i + 1);
            takenBikes[j] = false;
            curr -= dist[i][j];
        }
    }

    assign(0);

    return min;
};