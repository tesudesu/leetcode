// https://leetcode.com/problems/add-digits/

var addDigits = function(num) {
    if (num < 10) return num;

    function add(number) {
        let total = 0;
        while (number > 0) {
            total += number % 10
            number = Math.floor(number/10);
        }
        return total;
    }

    let result = 0;

    while (num >= 10) {
        result = add(num);
        num = result;
    }

    return result;
};

