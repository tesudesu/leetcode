// https://leetcode.com/problems/design-spreadsheet/

/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.sheet = Array(rows).fill().map(() => Array(26).fill(0));
};

/** 
 * @param {string} cell 
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    const col = cell.charCodeAt(0) - 65;
    const row = Number(cell.slice(1)) - 1;
    this.sheet[row][col] = value;
};

/** 
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    const col = cell.charCodeAt(0) - 65;
    const row = Number(cell.slice(1)) - 1;
    this.sheet[row][col] = 0;
};

/** 
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    const numbers = formula.split(/[=+]/);
    let num1;
    let num2;

    if (numbers[1].charCodeAt(0) >= 65 && numbers[1].charCodeAt(0) <= 90) {
        const col = numbers[1].charCodeAt(0) - 65;
        const row = Number(numbers[1].slice(1)) - 1;
        num1 = this.sheet[row][col]
    } else {
        num1 = Number(numbers[1]);
    }

    if (numbers[2].charCodeAt(0) >= 65 && numbers[2].charCodeAt(0) <= 90) {
        const col = numbers[2].charCodeAt(0) - 65;
        const row = Number(numbers[2].slice(1)) - 1;
        num2 = this.sheet[row][col];
    } else {
        num2 = Number(numbers[2]);
    }

    return num1 + num2;
};