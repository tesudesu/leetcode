// https://leetcode.com/problems/search-suggestions-system/

var suggestedProducts = function(products, searchWord) {
    let ans = Array(searchWord.length).fill();
    products.sort();

    let left = 0;
    let right = products.length - 1;

    for (let i = 0; i < searchWord.length; i++) {
        let curr = [];
        const c = searchWord[i];
        while (left <= right && products[left][i] !== c) {
            left++;
        }
        while (left <= right && products[right][i] !== c) {
            right--;
        }
        for (let j = left; j <= Math.min(left + 2, right); j++) {
            curr.push(products[j]);
        }
        ans[i] = curr;
    }

    return ans;
};