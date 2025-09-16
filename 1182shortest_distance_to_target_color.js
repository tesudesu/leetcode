// https://leetcode.com/problems/shortest-distance-to-target-color/

var shortestDistanceColor = function(colors, queries) {
    const findShortest = (col) => {
        let shortest = -1;
        let ans = Array(colors.length).fill(Infinity);

        for (let i = 0; i < colors.length; i++) {
            if (colors[i] === col) {
                shortest = i;
            }
            if (shortest !== -1) {
                ans[i] = i - shortest;
            }
        }

        shortest = -1;

        for (let i = colors.length - 1; i >= 0; i--) {
            if (colors[i] === col) {
                shortest = i;
            }
            if (shortest !== -1) {
                ans[i] = Math.min(ans[i], shortest - i);
            }
            if (ans[i] === Infinity) {
                ans[i] = -1;
            }
        }

        return ans;
    }

    let shortest1 = findShortest(1);
    let shortest2 = findShortest(2);
    let shortest3 = findShortest(3);

    let ans = Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        if (queries[i][1] === 1) {
            ans[i] = shortest1[queries[i][0]];
        } else if (queries[i][1] === 2) {
            ans[i] = shortest2[queries[i][0]];
        } else {
            ans[i] = shortest3[queries[i][0]];
        }
    }

    return ans;
};