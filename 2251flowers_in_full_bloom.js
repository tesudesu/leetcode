// https://leetcode.com/problems/number-of-flowers-in-full-bloom/

var fullBloomFlowers = function(flowers, people) {
    let ans = Array(people.length).fill(0);

    let startedBlooming = Array(flowers.length).fill();
    let endedBlooming = Array(flowers.length).fill();

    for (let i = 0; i < flowers.length; i++) {
        startedBlooming[i] = flowers[i][0];
        endedBlooming[i] = flowers[i][1];
    }

    startedBlooming.sort((a, b) => a - b);
    endedBlooming.sort((a, b) => a - b);

    for (let i = 0; i < people.length; i++) {
        let started = 0;
        let ended = 0;

        let left = 0;
        let right = startedBlooming.length - 1;

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left;

            if (startedBlooming[mid] <= people[i]) {
                started = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        left = 0;
        right = endedBlooming.length - 1;

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left;

            if (endedBlooming[mid] < people[i]) {
                ended = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        ans[i] = started - ended;
    }

    return ans;
};


// Brute force

// var fullBloomFlowers = function(flowers, people) {
//     let ans = Array(people.length).fill(0);

//     for (let i = 0; i < people.length; i++) {
//         for (let j = 0; j < flowers.length; j++) {
//             if (people[i] >= flowers[j][0] && people[i] <= flowers[j][1]) {
//                 ans[i]++;
//             }
//         }
//     }

//     return ans;
// };