// https://leetcode.com/problems/lemonade-change/

var lemonadeChange = function(bills) {
    if (bills[0] !== 5) {
        return false;
    }
    let change = {
        five: 1,
        ten: 0,
    }
    for (let i = 1; i < bills.length; i++) {
        if (bills[i] === 5) {
            change.five++;
        } else if (bills[i] === 10) {
            if (change.five === 0) {
                return false;
            } else {
                change.five--;
                change.ten++;
            }
        } else {
            if (change.five === 0 || (change.ten === 0 && change.five < 3)) {
                return false;
            } else if (change.ten !== 0) {
                change.ten--;
                change.five--;
            } else {
                change.five -= 3;
            }
        }
    }
    return true;
};

// var lemonadeChange = function(bills) {
//     if (bills[0] !== 5) {
//         return false;
//     }
//     let change = {
//         five: 1,
//         ten: 0,
//     }
//     for (let i = 1; i < bills.length; i++) {
//         if (bills[i] === 5) {
//             change.five++;
//         } else if (bills[i] === 10) {
//             change.five--;
//             if (change.five < 0) {
//                 return false;
//             }
//             change.ten++;
//         } else {
//             if (change.ten !== 0) {
//                 change.ten--;
//                 change.five--;
//             } else {
//                 change.five -= 3;
//             }
//             if (change.five < 0) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };