// https://leetcode.com/problems/find-the-celebrity/

var solution = function (knows) {
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function (n) {
        const isCelebrity = Array(n).fill(true);

        for (let i = 0; i < n; i++) {
            if (!isCelebrity[i]) continue;
            for (let j = 0; j < n; j++) {
                if (i === j) continue;
                if (!knows(j, i)) {
                    isCelebrity[i] = false;
                    break;
                } else {
                    isCelebrity[j] = false;
                }
                if (knows(i, j)) {
                    isCelebrity[i] = false;
                    break;
                }
            }
            if (isCelebrity[i]) {
                return i;
            }
        }

        return -1;
    };
};