-- https://leetcode.com/problems/employee-bonus/

SELECT Employee.name, Bonus.bonus FROM Employee LEFT JOIN BONUS ON Employee.empid = Bonus.empid 
WHERE bonus < 1000 OR bonus IS NULL;