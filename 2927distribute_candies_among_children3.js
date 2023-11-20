// https://leetcode.com/problems/distribute-candies-among-children-iii/

// n candies, add 2 partition, n + 2 spots. n + 2 choose 2 ways

var distributeCandies = function(n, limit) {
    limit = Math.min(limit, n);

    // ways(considering limit) = ways(don't consider limit) - ways(over limit)

    // ways(don't consider limit)
    let tot = BigInt((n + 2) * (n + 1) / 2);

    // ways(over limit) = ways(A over limit) + ways(B over limit) + ways(C over limit) - ways(A and B over limit) - ways(B and C over limit) - ways(A and C over limit) + ways(A and B and C over limit)

    // ways(1 person over limit)
    let oneOver = 0n;
    if (n - 1 * (limit + 1) >= 0) {
        oneOver = BigInt((n - 1 * (limit + 1) + 2) * (n - 1 * (limit + 1) + 1) / 2);
    }

    // ways(2 people over limt)
    let twoOver = 0n;
    if (n - 2 * (limit + 1) >= 0) {
        twoOver = BigInt((n - 2 * (limit + 1) + 2) * (n - 2 * (limit + 1) + 1) / 2);
    }

    // ways(3 people over limit)
    let threeOver = 0n;
    if (n - 3 * (limit + 1) >= 0) {
        threeOver = BigInt((n - 3 * (limit + 1) + 2) * (n - 3 * (limit + 1) + 1) / 2);
    }

    // ways(over limit)
    let waysOver = (oneOver * 3n) - (twoOver * 3n) + threeOver;
    
    return Number(tot - waysOver);
};