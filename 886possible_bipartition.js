// https://leetcode.com/problems/possible-bipartition/

var possibleBipartition = function(n, dislikes) {
    const map = new Map();

    for (let i = 0; i < dislikes.length; i++) {
        const [personA, personB] = dislikes[i];
        let curr = map.get(personA) || [];
        curr.push(personB);
        map.set(personA, curr);

        curr = map.get(personB) || [];
        curr.push(personA);
        map.set(personB, curr);
    }

    let arr = Array(n + 1).fill(-1);
    let possible = true;

    const findDislike = (person, currColor) => {
        if (!map.has(person)) return;

        const dislikePeople = map.get(person);

        if (arr[person] === -1) {
            arr[person] = currColor;
            for (let i = 0; i < dislikePeople.length; i++) {
                if (arr[dislikePeople[i]] === currColor) {
                    possible = false;
                    return;
                } else if (arr[dislikePeople[i]] === -1) {
                    arr[dislikePeople[i]] = 1 - currColor;
                    findDislike(dislikePeople[i], 1 - currColor);
                }
            }
        } else if (arr[person] === 0) {
            for (let i = 0; i < dislikePeople.length; i++) {
                if (arr[dislikePeople[i]] === 0) {
                    possible = false;
                    return;
                } else if (arr[dislikePeople[i]] === -1) {
                    arr[dislikePeople[i]] = 1;
                    findDislike(dislikePeople[i], 1);
                }
            }
        } else if (arr[person] === 1) {
            for (let i = 0; i < dislikePeople.length; i++) {
                if (arr[dislikePeople[i]] === 1) {
                    possible = false;
                    return;
                } else if (arr[dislikePeople[i]] === -1) {
                    arr[dislikePeople[i]] = 0;
                    findDislike(dislikePeople[i], 0);
                }
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        findDislike(i, 0);
        if (!possible) return false;
    }

    return true;
};


// More succinct way to write dfs

// var possibleBipartition = function(n, dislikes) {
//     const map = new Map();

//     for (let i = 0; i < dislikes.length; i++) {
//         const [personA, personB] = dislikes[i];
//         let curr = map.get(personA) || [];
//         curr.push(personB);
//         map.set(personA, curr);

//         curr = map.get(personB) || [];
//         curr.push(personA);
//         map.set(personB, curr);
//     }

//     let assignments = Array(n + 1).fill(-1);

//     let isPossible = true;

//     const dfs = (person, color) => {
//         if (!map.has(person)) return;

//         assignments[person] = color;

//         const dislikePeople = map.get(person);

//         for (let i = 0; i < dislikePeople.length; i++) {
//             if (assignments[dislikePeople[i]] === color) {
//                 isPossible = false;
//                 return;
//             } else {
//                 if (assignments[dislikePeople[i]] === -1) {
//                     dfs(dislikePeople[i], 1 - color);
//                 }
//             }
//         }
//     }

//     for (let i = 1; i <= n; i++) {
//         if (assignments[i] === -1) {
//             dfs(i, 0);
//         }
//         if (!isPossible) return false;
//     }

//     return true;
// };