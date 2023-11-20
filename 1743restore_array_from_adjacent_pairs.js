// https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/

var restoreArray = function(adjacentPairs) {
    const map = new Map();

    for (let i = 0; i < adjacentPairs.length; i++) {
        const [a, b] = adjacentPairs[i];
        if (map.has(a)) {
            let arr = map.get(a);
            arr.push(b);
            map.set(a, arr);
        } else {
            map.set(a, [b]);
        }
        if (map.has(b)) {
            let arr = map.get(b);
            arr.push(a);
            map.set(b, arr);
        } else {
            map.set(b, [a]);
        }
    }

    let ans = adjacentPairs[0];
    let curr = ans[1];
    let prev = ans[0];
    
    while (map.get(curr).length === 2) {
        const joining = map.get(curr);
        for (let i = 0; i < joining.length; i++) {
            if (joining[i] !== prev) {
                ans.push(joining[i]);
                prev = curr;
                curr = joining[i];
                break;
            }
        }
    }

    ans.reverse();
    curr = ans[ans.length - 1];
    prev = ans[ans.length - 2];

    while (map.get(curr).length === 2) {
        const joining = map.get(curr);
        for (let i = 0; i < joining.length; i++) {
            if (joining[i] !== prev) {
                ans.push(joining[i]);
                prev = curr;
                curr = joining[i];
                break;
            }
        }
    }

    return ans;
};


// var restoreArray = function(adjacentPairs) {
//     const map = new Map();

//     for (let i = 0; i < adjacentPairs.length; i++) {
//         const [a, b] = adjacentPairs[i];
//         if (map.has(a)) {
//             let arr = map.get(a);
//             arr.push(b);
//             map.set(a, arr);
//         } else {
//             map.set(a, [b]);
//         }
//         if (map.has(b)) {
//             let arr = map.get(b);
//             arr.push(a);
//             map.set(b, arr);
//         } else {
//             map.set(b, [a]);
//         }
//     }

//     let ans = adjacentPairs[0];

//     const visited = new Set();

//     const addToBack = (val) => {
//         visited.add(val);

//         const nextVals = map.get(val);
//         for (let i = 0; i < nextVals.length; i++) {
//             if (visited.has(nextVals[i])) continue;
//             ans.push(nextVals[i]);
//             addToBack(nextVals[i], visited);
//         }
//     }

//     visited.add(ans[0]);
//     addToBack(ans[1], visited);
//     visited.delete(ans[0]);
//     ans.reverse();
//     addToBack(ans[ans.length - 1], visited);

//     return ans;
// };