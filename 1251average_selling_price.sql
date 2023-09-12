-- https://leetcode.com/problems/average-selling-price/

SELECT Prices.product_id, ROUND(SUM(Prices.price * UnitsSold.units)/SUM(UnitsSold.units), 2) AS average_price FROM Prices JOIN UnitsSold ON Prices.product_id = UnitsSold.product_id AND UnitsSold.purchase_date BETWEEN Prices.start_date and Prices.end_date GROUP BY Prices.product_id;