// https://leetcode.com/problems/fibonacci-number/

var fib = function(n) {
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[n];
};