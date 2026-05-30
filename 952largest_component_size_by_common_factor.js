// https://leetcode.com/problems/largest-component-size-by-common-factor/

var largestComponentSize = function(nums) {
    const getPrimeFactors = (num) => {
        const factors = [];
        const limit = Math.floor(Math.sqrt(num));

        if (num % 2 === 0) {
            factors.push(2);
            while (num % 2 === 0) {
                num /= 2;
            }
        }

        for (let i = 3; i <= limit; i += 2) {
            if (num % i === 0) {
                factors.push(i);
                while (num % i === 0) {
                    num /= i;
                }
            }
        }

        if (num > 1) {
            factors.push(num);
        }

        return factors;
    }

    const roots = new Map();
    const size = new Map();

    let ans = 0;

    const find = (num) => {
        if (roots.get(num) !== num) {
            roots.set(num, find(roots.get(num)));
        }
        return roots.get(num);
    }

    const union = (num1, num2) => {
        const root1 = find(num1);
        const root2 = find(num2);

        if (root1 === root2) return;

        if (size.get(root1) >= size.get(root2)) {
            size.set(root1, size.get(root1) + size.get(root2));
            roots.set(root2, root1);
        } else {
            size.set(root2, size.get(root1) + size.get(root2));
            roots.set(root1, root2);
        }
    }

    for (const num of nums) {
        roots.set(num, num);
        size.set(num, 1);
    }

    for (const num of nums) {
        const factors = getPrimeFactors(num);
        for (const factor of factors) {
            if (!roots.has(factor)) {
                roots.set(factor, factor);
                size.set(factor, 0);
            }
            union(factor, num);
        }
    }

    for (const num of nums) {
        ans = Math.max(ans, size.get(find(num)));
    }

    return ans;
};