// https://leetcode.com/problems/tuple-with-same-product/

var tupleSameProduct = function(nums) {
    const products = new Map();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];
            products.set(product, (products.get(product) + 1)|| 1);
        }
    }

    let ans = 0;

    for (const [num, count] of products) {
        ans += count * (count - 1) * 4;
    }

    return ans;
};