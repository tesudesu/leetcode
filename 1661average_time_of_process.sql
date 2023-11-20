-- https://leetcode.com/problems/average-time-of-process-per-machine/

SELECT a.machine_id, ROUND(AVG(b.timestamp - a.timestamp), 3) as processing_time FROM Activity a 
JOIN Activity b ON a.machine_id = b.machine_id AND a.activity_type = 'start' 
AND b.activity_type = 'end' GROUP BY a.machine_id;