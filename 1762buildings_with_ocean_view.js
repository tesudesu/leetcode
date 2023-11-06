// https://leetcode.com/problems/buildings-with-an-ocean-view/

var findBuildings = function(heights) {
    const n = heights.length;
    let max = 0;

    let ans = []

    for (let i = n - 1; i >= 0; i--) {
        if (heights[i] > max) {
            ans.push(i);
        }
        max = Math.max(max, heights[i]);
    }

    return ans.reverse();
};


// var findBuildings = function(heights) {
//     const n = heights.length;

//     let highestAfter = Array(n).fill(0);
//     let ans = [n - 1];

//     for (let i = n - 2; i >= 0; i--) {
//         highestAfter[i] = Math.max(heights[i + 1], highestAfter[i + 1]);
//         if (heights[i] > highestAfter[i]) {
//             ans.push(i);
//         }
//     }

//     return ans.reverse();
// };