-- https://leetcode.com/problems/employees-earning-more-than-their-managers/

SELECT a.name AS Employee
FROM Employee AS a, Employee AS b 
WHERE a.managerID = b.id AND a.salary > b.salary;