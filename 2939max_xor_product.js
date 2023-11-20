// https://leetcode.com/problems/maximum-xor-product/

var maximumXorProduct = function(a, b, n) {
    a = BigInt(a);
    b = BigInt(b);

    // make a the larger value
    if (a < b) {
        const temp = b;
        b = a;
        a = temp;
    }

    let mask = (1n << BigInt(n)) - 1n; 
    
    // bits at n and higher
    let ax = a & ~mask;
    let bx = b & ~mask;

    // bits lower than n
    a &= mask;
    b &= mask;

    // locations where one is 1, the other is 0
    let diff = a ^ b;

    // locations where you can make all 1
    let one = mask ^ diff;

    // add to anwer
    ax |= one;
    bx |= one; 

    let length = diff.toString(2).length;

    if (diff > 0n && ax === bx) {
        // allocate 1 to a at highest bit location of diff, rest 0
        // allocate 0 to b at highest bit location of diff, rest 1
        ax += BigInt(Math.pow(2, length - 1));
        diff -= BigInt(Math.pow(2, length - 1));
    }

    bx += diff;

    return (ax * bx) % BigInt((1e9 + 7));
};