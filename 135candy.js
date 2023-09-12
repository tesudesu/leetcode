// https://leetcode.com/problems/candy/

var candy = function(ratings) {
    let candy = Array(ratings.length).fill(1);

    let orderedRatings = [...ratings].map((val, ind) => [val, ind]).sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < orderedRatings.length; i++) {
        const ind = orderedRatings[i][1];

        if (ratings[ind] > ratings[ind + 1]) {
            candy[ind] = Math.max(candy[ind], candy[ind + 1] + 1);
        }
        if (ratings[ind] > ratings[ind - 1]) {
            candy[ind] = Math.max(candy[ind], candy[ind - 1] + 1);
        }
    }

    let tot = 0;

    for (let i = 0; i < candy.length; i++) {
        tot += candy[i];
    }

    return tot;
};


// var candy = function(ratings) {
//     let candy = Array(ratings.length).fill(1);

//     for (let i = 1; i < ratings.length; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             candy[i] = Math.max(candy[i], candy[i - 1] + 1);
//         }
//     }

//     for (let i = ratings.length - 2; i >= 0; i--) {
//         if (ratings[i] > ratings[i + 1]) {
//             candy[i] = Math.max(candy[i], candy[i + 1] + 1);
//         }
//     }

//     let tot = 0;

//     for (let i = 0; i < candy.length; i++) {
//         tot += candy[i];
//     }

//     return tot;
// };