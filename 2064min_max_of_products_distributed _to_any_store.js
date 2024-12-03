// https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/

var minimizedMaximum = function(n, quantities) {
    const canDistribute = (amount) => {
        let curr = 0;

        for (let i = 0; i < quantities.length; i++) {
            let stores = Math.ceil(quantities[i] / amount);
            curr += stores;
            if (curr > n) {
                return false;
            }
        }

        return true;
    }

    const max = Math.max(...quantities);
    
    let start = 1;
    let end = max;
    let ans = max;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        if (canDistribute(mid)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
};