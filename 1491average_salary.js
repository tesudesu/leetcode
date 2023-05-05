// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

var average = function(salary) {
    let tot = salary[0];
    let min = salary[0];
    let max = salary[0];
    for (let i = 1; i < salary.length; i++) {
        tot += salary[i];
        if (salary[i] < min) {
            min = salary[i];
        } else if (salary[i] > max) {
            max = salary[i];
        }
    }
    return (tot - min - max) / (salary.length - 2);
};