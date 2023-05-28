// https://leetcode.com/problems/fibonacci-number/

var fib = function(n) {
    let cache = new Map();
    cache.set(0, 0);
    cache.set(1, 1);

    const fibSeq = (num) => {
        if (cache.has(num)) {
            return cache.get(num);
        } else {
            const result = fibSeq(num-1) + fibSeq(num-2);
            cache.set(num, result);
            return result;
        }
    }
    
    return fibSeq(n);
};

// var fib = function(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) return 1;
//     return fib(n-1) + fib(n-2);
// };

// var fib = function(n) {
//     let fibo = [];
//     fibo[0] = 0;
//     fibo[1] = 1;
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo[n];
// };