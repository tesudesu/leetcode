// https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/

var leftmostBuildingQueries = function(heights, queries) {
    let ans = Array(queries.length).fill(-1);

    let remain = [];

    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        if (a === b) {
            ans[i] = a;
            continue;
        } 
        let maxOfAB = Math.max(a, b);
        let minOfAB = Math.min(a, b);
        if (heights[minOfAB] < heights[maxOfAB]) {
            ans[i] = maxOfAB;
            continue;
        }
        remain.push([maxOfAB, heights[minOfAB], i]);
    }

    remain.sort((a, b) => b[0] - a[0]);

    let stack = [];
    let rightBoundary = heights.length - 1;

    for (let i = 0; i < remain.length; i++) {
        const [higherBuildingIndex, higherBuilding, originalIndex] = remain[i];
        for (let j = rightBoundary; j > higherBuildingIndex; j--) {
            while (stack.length > 0 && heights[j] >= heights[stack[stack.length - 1]]) {
                stack.pop();
            }
            stack.push(j);
        }
        
        let start = 0;
        let end = stack.length - 1;
        let res = -1;

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;
            if (heights[stack[mid]] > higherBuilding) {
                res = stack[mid];
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        ans[originalIndex] = res;

        rightBoundary = higherBuildingIndex;
    }

    return ans;
};


// var leftmostBuildingQueries = function(heights, queries) {
//     let ans = Array(queries.length).fill(-1);

//     let higher = Array(heights.length).fill();
//     higher[higher.length - 1] = Infinity;

//     let stack = [];
//     stack.push(heights.length - 1);
//     for (let i = heights.length - 2; i >= 0; i--) {
//         while (heights[stack[stack.length - 1]] <= heights[i]) {
//             stack.pop();
//         }
//         if (stack.length > 0) {
//             higher[i] = stack[stack.length - 1];
//         } else {
//             higher[i] = Infinity;
//         }
//         stack.push(i);
//     }

//     for (let i = 0; i < queries.length; i++) {
//         const [a, b] = queries[i];
//         if (a === b) {
//             ans[i] = a;
//             continue;
//         }
//         let maxOfAB = Math.max(a, b);
//         let minOfAB = Math.min(a, b);
//         if (heights[maxOfAB] > heights[minOfAB]) {
//             ans[i] = maxOfAB;
//             continue;
//         }
//         while (higher[maxOfAB] !== Infinity) {
//             if (heights[higher[maxOfAB]] > heights[minOfAB]) {
//                 ans[i] = higher[maxOfAB];
//                 break;
//             }
//             maxOfAB = higher[maxOfAB];
//         }
//     }

//     return ans;
// };