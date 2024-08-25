// https://leetcode.com/problems/combination-sum-ii/

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];
    let curr = [];

    const dfs = (i, sum) => {
        if (sum === target) {
            ans.push(curr.slice());
            return;
        }
        if (sum > target || i === candidates.length) {
            return;
        }
        
        // take
        curr.push(candidates[i]);
        dfs(i + 1, sum + candidates[i]);
        curr.pop();

        // skip
        let j = i + 1;
        while (candidates[j] === candidates[i]) {
            j++;
        }

        dfs(j, sum);
    }

    dfs(0, 0);

    return ans;
};


var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let ans = [];

    const backtrack = (index, arr, sum) => {
        if (sum === target) {
            ans.push(arr.slice());
            return;
        }
        if (sum > target) {
            return;
        }

        let prev = -1;
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] === prev) continue;
            backtrack(i+1, [...arr, candidates[i]], sum + candidates[i]);
            prev = candidates[i];
        }
    }
        
    backtrack(0, [], 0);

    return ans;
};


// var combinationSum2 = function (candidates, target) {
//     candidates.sort((a, b) => a - b);
//     let ans = [];

//     const backtrack = (index, arr, sum) => {
//         if (sum === target) {
//             ans.push(arr);
//             return;
//         }
//         if (sum > target) {
//             return;
//         }

//         for (let i = index; i < candidates.length; i++) {
//             if (i !== index && candidates[i] === candidates[i-1]) continue;
//             backtrack(i+1, [...arr, candidates[i]], sum + candidates[i]);
//         }
//     }
        
//     backtrack(0, [], 0);

//     return ans;
// };


// var combinationSum2 = function(candidates, target) {
//     let ans = [];
//     let unique = new Set();

//     let counts = {};
//     for (let i = 0; i < candidates.length; i++) {
//         if (counts[candidates[i]]) {
//             counts[candidates[i]]++;
//         } else {
//             counts[candidates[i]] = 1;
//         }
//     }

//     const backtrack = (left, arr, sum) => {
//         if (sum === target) {
//             arr.sort((a, b) => (a - b));
//             if (!unique.has(arr.toString())) {
//                 ans.push(arr);
//                 unique.add(arr.toString());
//             }
//             return;
//         }
//         if (sum > target) {
//             return;
//         }

//         for (let i = 0; i < candidates.length; i++) {
//             const clonedLeft = {...left};
//             if (clonedLeft[candidates[i]] > 0) {
//                 clonedLeft[candidates[i]]--;
//                 backtrack(clonedLeft, [...arr, candidates[i]], sum + candidates[i]);
//             } else {
//                 return;
//             }
//         }
//     }

//     backtrack(counts, [], 0);

//     return ans;
// };