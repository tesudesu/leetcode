// https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/

var queryResults = function(limit, queries) {
    let count = new Map();
    let color = new Map()
    let ans = Array(queries.length).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let [a, b] = queries[i];
        if (!color.has(a)) {
            color.set(a, b);
            count.set(b, (count.get(b) + 1) || 1);
        } else {
            count.set(color.get(a), count.get(color.get(a)) - 1);
            if (count.get(color.get(a)) === 0) {
                count.delete(color.get(a));
            }
            color.set(a, b);
            count.set(b, (count.get(b) + 1) || 1);
        }
        ans[i] = count.size;
    }

    return ans;
};