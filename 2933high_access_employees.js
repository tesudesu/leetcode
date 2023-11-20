// https://leetcode.com/problems/high-access-employees/

var findHighAccessEmployees = function(access_times) {
    const employees = {};

    for (let i = 0; i < access_times.length; i++) {
        const [employee, time] = access_times[i];
        if (employees.hasOwnProperty(employee)) {
            employees[employee].push(Number(time));
        } else {
            employees[employee] = [Number(time)];
        }
    }

    let ans = [];

    for (const emp in employees) {
        employees[emp].sort((a, b) => a - b);
        const times = employees[emp];
        for (let i = 0; i < times.length; i++) {
            if (i + 2 < times.length) {
                if (times[i] + 100 > times[i + 2]) {
                    ans.push(emp);
                    break;
                }
            }
        }
    }

    return ans;
};