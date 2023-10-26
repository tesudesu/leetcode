// https://leetcode.com/problems/lexicographical-numbers/

var lexicalOrder = function (n) {
    let res = [];

    const dfs = (num) => {
        if (num > n) return;

        res.push(num);
        for (let j = 0; j <= 9; j++) {
            dfs((num * 10) + j);
        }
    }

    for (let i = 1; i <= 9; i++) {
        dfs(i);
    }

    return res;
};


// var lexicalOrder = function(n) {
//     let res = Array(n).fill();

//     for (let i = 0; i < n; i++) {
//         const num = i + 1;
//         res[i] = num.toString();
//     }

//     res.sort();

//     for (let i = 0; i < n; i++) {
//         res[i] = Number(res[i]);
//     }

//     return res;
// };