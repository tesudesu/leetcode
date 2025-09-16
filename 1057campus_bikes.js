// https://leetcode.com/problems/campus-bikes/

var assignBikes = function(workers, bikes) {
    let arr = [];

    for (let i = 0; i < workers.length; i++) {
        for (let j = 0; j < bikes.length; j++) {
            let dist = Math.abs(workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1]);
            arr.push([dist, i, j]);
        }
    }

    let workersAssigned = Array(workers.length).fill(false);
    let bikesAssigned = Array(bikes.length).fill(false);

    arr.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (b[0] < a[0]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else if (a[2] < b[2]) {
            return -1;
        } else {
            return 1;
        }
    })

    let assigned = 0;
    let ans = Array(workers.length).fill();

    for (let i = 0; i < arr.length; i++) {
        const [dist, worker, bike] = arr[i];
        if (!workersAssigned[worker] && !bikesAssigned[bike]) {
            ans[worker] = bike;
            assigned++;
            workersAssigned[worker] = true;
            bikesAssigned[bike] = true;
        }

        if (assigned === workers.length) {
            return ans;
        }
    }
};