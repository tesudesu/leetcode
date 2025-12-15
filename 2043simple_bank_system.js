// https://leetcode.com/problems/simple-bank-system/

/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.bank = balance;
    this.n = balance.length;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 > this.n || account2 > this.n || this.bank[account1 - 1] < money) return false;

    this.bank[account1 - 1] -= money;
    this.bank[account2 - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (account > this.n) return false;

    this.bank[account - 1] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (account > this.n || this.bank[account - 1] < money) return false;

    this.bank[account - 1] -= money;
    return true;
};