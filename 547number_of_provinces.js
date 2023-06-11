// https://leetcode.com/problems/number-of-provinces/

var findCircleNum = function(isConnected) {
    let visited = new Set();
    let provinces = 0;

    const dfs = (index) => {
        visited.add(index);
        for (let i = 0; i < isConnected[0].length; i++) {
            if (isConnected[index][i] === 1 && !visited.has(i)) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < isConnected.length; i++) {
        if (!visited.has(i)) {
            dfs(i);
            provinces++;
        }
    }

    return provinces;
};

// var findCircleNum = function (isConnected) {
//     let visited = new Set();
//     let provinces = 0;

//     const bfs = (index) => {
//         let queue = [];
//         queue.push(index);
//         visited.add(index);

//         while (queue.length > 0) {
//             let curr = queue.pop();

//             for (let i = 0; i < isConnected[0].length; i++) {
//                 if (isConnected[curr][i] === 1 && !visited.has(i)) {
//                     queue.push(i);
//                     visited.add(i);
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < isConnected.length; i++) {
//         if (!visited.has(i)) {
//             bfs(i);
//             provinces++;
//         }
//     }

//     return provinces;
// };