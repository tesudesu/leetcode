// https://leetcode.com/problems/maximum-number-of-alloys/

var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
    const canMake = (mid) => {
        for (let i = 0; i < k; i++) {
            let bud = budget;
            for (let j = 0; j < n; j++) {
                if (bud < 0) break;
                let required = composition[i][j] * mid;
                required -= stock[j];
                if (required > 0) {
                    bud -= required * cost[j];
                }
            }
            if (bud >= 0) return true;
        }
        return false;
    }
    
    let start = 0;
    let end = 1e9;

    let res = 0;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;
        
        if (canMake(mid)) {
            res = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return res;
};


// var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {
//     let tot = 0;

//     for (let i = 0; i < k; i++) {
//         let stockCopy = [...stock];
//         let bud = budget;
//         let made = 0;
//         while (bud >= 0) {
//             for (let j = 0; j < n; j++) {
//                 const diff = composition[i][j] - stockCopy[j];
//                 stockCopy[j] -= Math.min(stockCopy[j], composition[i][j]);
//                 if (diff > 0) {
//                     bud -= diff * cost[j];
//                 }
//             }
//             if (bud >= 0) made++;
//         }
//         tot = Math.max(tot, made);
//     }

//     return tot;
// };