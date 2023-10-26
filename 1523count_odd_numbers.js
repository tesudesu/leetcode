// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

var countOdds = function(low, high) {
    let ans = Math.ceil((high - low) / 2);

    if (low % 2 === 1 && high % 2 === 1) {
        ans++;
    }
    
    return ans;
};

// var countOdds = function(low, high) {
//     let tot = 0;

//     for (let i = low; i <= high; i++) {
//         if (i % 2 === 1) tot++;
//     }

//     return tot;
// };