// https://leetcode.com/problems/distribute-candies-among-children-i/

var distributeCandies = function(n, limit) {
    let tot = 0;

    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                if (k + j + i === n) tot++;
            }
        }
    }

    return tot;
};


// var distributeCandies = function(n, limit) {
//     let tot = 0;

//     const distribute = (remain, child) => {
//         if (child === 3) {
//             if (remain <= limit && remain >= 0) {
//                 tot++;
//             }
//             return;
//         }

//         for (let i = 0; i <= limit; i++) {
//             distribute(remain - i, child + 1);
//         }        
//     }

//     distribute(n, 1);

//     return tot;
// };