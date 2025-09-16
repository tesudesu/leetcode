// https://leetcode.com/problems/number-of-people-aware-of-a-secret/

var peopleAwareOfSecret = function(n, delay, forget) {
    let canShare = 0;
    const startShare = new Queue();
    const startForget = new Queue();
    startShare.enqueue([1 + delay, 1]);
    startForget.enqueue([1 + forget, 1]);
    let tot = 1;
    const mod = 1000000007;

    for (let i = 2; i <= n; i++) {
        if (startShare.front()[0] === i) {
            canShare = (canShare + startShare.front()[1]) % mod;
            startShare.dequeue();
        }
        
        if (startForget.front()[0] === i) {
            canShare = (canShare - startForget.front()[1] + mod) % mod; 
            tot = (tot - startForget.front()[1] + mod) % mod;
            startForget.dequeue();
        }
        if (canShare !== 0) {
            startShare.enqueue([i + delay, canShare]);
            startForget.enqueue([i + forget, canShare]);
        }

        tot = (tot + canShare) % mod;
    }

    return tot;
};