// https://leetcode.com/problems/koko-eating-bananas/

var minEatingSpeed = function (piles, h) {
    const max = Math.max(...piles);

    let remain = h - piles.length;
    if (remain > 0) {
        remain--;
    } else {
        return max;
    }

    if (remain === 0) {
        let secondMax = [];
        let countedMax = false;
        for (let i = 0; i < piles.length; i++) {
            if (piles[i] === max && !countedMax) {
                countedMax = true;
                continue;
            }
            secondMax.push(piles[i]);
        }
        return Math.max(Math.ceil(max / 2), Math.max(...secondMax));
    } else {
        let start = 0;
        let end = Math.ceil(max / 2);

        let minK = end;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            let total = 1;

            for (let i = 0; i < piles.length; i++) {
                if (piles[i] !== max) {
                    total += Math.ceil(piles[i] / mid);
                } else {
                    total += Math.ceil((piles[i] - mid) / mid);
                }
            }

            if (total <= h) {
                minK = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return minK;
    }
};