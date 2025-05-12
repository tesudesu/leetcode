// https://leetcode.com/problems/maximum-candies-allocated-to-k-children/

var maximumCandies = function(candies, k) {
    let start = 0
    let end = Math.max(...candies);
    
    const isPossible = (num) => {
        let kids = k;
        for (let i = 0; i < candies.length; i++) {
            kids -= Math.floor(candies[i] / num);
        }
        if (kids > 0) {
            return false;
        } else {
            return true;
        }
    }

    let res = start;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (isPossible(mid)) {
            start = mid + 1;
            res = mid;
        } else {
            end = mid - 1;
        }
    }  

    return res;
};