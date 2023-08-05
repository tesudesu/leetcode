// https://leetcode.com/problems/number-of-employees-who-met-the-target/

var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let tot = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) tot++;
    }

    return tot;
};