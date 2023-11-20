// https://leetcode.com/problems/distribute-candies-among-children-ii/

var distributeCandies = function(n, limit) {
    limit = Math.min(limit, n);
    let tot = 0;

    // fix number first child gets
    for (let i = 0; i <= limit; i++) {
        const remaining = n - i;
        const jMax = Math.min(limit, remaining);
        // the max number the second child can get
        const jMin = Math.max(0, remaining - limit);
        // the min number the second child can get. remaining - limit because the last child can have at most limit candies
        if (jMin > limit) continue;
        // add number of valid combos for fixed i to answer
        tot += jMax - jMin + 1;
    }

    return tot;
};


// n candies, add 2 partition, n + 2 spots. n + 2 choose 2 ways

var distributeCandies = function(n, limit) {
    limit = Math.min(limit, n);

    // ways(considering limit) = ways(don't consider limit) - ways(over limit)

    // ways(don't consider limit)
    let tot = (n + 2) * (n + 1) / 2;

    // ways(over limit) = ways(A over limit) + ways(B over limit) + ways(C over limit) - ways(A and B over limit) - ways(B and C over limit) - ways(A and C over limit) + ways(A and B and C over limit)

    // ways(1 person over limit)
    let oneOver = 0;
    if (n - 1 * (limit + 1) >= 0) {
        oneOver = (n - 1 * (limit + 1) + 2) * (n - 1 * (limit + 1) + 1) / 2;
    }

    // ways(2 people over limt)
    let twoOver = 0;
    if (n - 2 * (limit + 1) >= 0) {
        twoOver = (n - 2 * (limit + 1) + 2) * (n - 2 * (limit + 1) + 1) / 2;
    }

    // ways(3 people over limit)
    let threeOver = 0;
    if (n - 3 * (limit + 1) >= 0) {
        threeOver = (n - 3 * (limit + 1) + 2) * (n - 3 * (limit + 1) + 1) / 2;
    }

    // ways(over limit)
    let waysOver = (oneOver * 3) - (twoOver * 3) + threeOver;
    
    return tot - waysOver;
};