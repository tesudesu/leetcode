// https://leetcode.com/problems/excel-sheet-column-title/

var convertToTitle = function(columnNumber) {
    let ans = "";

    while (columnNumber > 0) {
        let code = columnNumber % 26;
        if (code === 0) {
            code = 26;
        }

        ans = String.fromCharCode(code + 64) + ans;

        columnNumber = (columnNumber - code) / 26;
    } 

    return ans;
};