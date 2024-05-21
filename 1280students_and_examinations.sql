-- https://leetcode.com/problems/students-and-examinations/

SELECT stu.student_id, stu.student_name, sub.subject_name, COUNT(e.subject_name) AS attended_exams
FROM Students stu CROSS JOIN Subjects sub LEFT JOIN Examinations e 
ON e.student_id = stu.student_id AND e.subject_name = sub.subject_name
GROUP BY stu.student_id, sub.subject_name
ORDER BY stu.student_id