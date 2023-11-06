// https://leetcode.com/problems/find-champion-ii/

var findChampion = function(n, edges) {
    const hasBeenBeaten = new Set();

    for (let i = 0; i < edges.length; i++) {
        hasBeenBeaten.add(edges[i][1]);
    }

    let candidates = [];

    for (let i = 0; i < n; i++) {
        if (!hasBeenBeaten.has(i)) {
            candidates.push(i);
        }
    }

    return candidates.length === 1 ? candidates[0] : -1;
};


// DFS

// var findChampion = function(n, edges) {
//     let stronger = new Map();

//     for (let i = 0; i < edges.length; i++) {
//         const [team, beat] = edges[i];
//         if (stronger.has(team)) {
//             let arr = stronger.get(team);
//             arr.push(beat);
//             stronger.set(team, arr);
//         } else {
//             stronger.set(team, [beat]);
//         }
//     }

//     let strongerThan = 0;

//     const find = (team, visited) => {
//         if (visited.has(team)) return;
//         visited.add(team);
//         strongerThan++;

//         let beats = [];
//         if (stronger.has(team)) {
//             beats = stronger.get(team);
//         }

//         for (let j = 0; j < beats.length; j++) {
//             find(beats[j], visited);
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         strongerThan = 0;
//         let visited = new Set();
//         find(i, visited);
//         if (strongerThan === n) return i;
//     }

//     return -1;
// };