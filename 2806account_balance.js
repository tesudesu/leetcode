// https://leetcode.com/problems/account-balance-after-rounded-purchase/

var accountBalanceAfterPurchase = function(purchaseAmount) {
    const lower = Math.floor(purchaseAmount / 10) * 10;
    const higher = Math.ceil(purchaseAmount / 10) * 10;

    if (higher - purchaseAmount <= purchaseAmount - lower) {
        return 100 - higher;
    } else {
        return 100 - lower;
    }
};