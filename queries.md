# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```SQL
SELECT ProductName, CategoryName FROM [Products] AS p
JOIN [Categories] AS c
ON p.categoryID = c.categoryID;
```
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```SQL
SELECT o.OrderID, s.ShipperName FROM [Orders] AS o
JOIN [Shippers] AS s
ON o.ShipperID = s.ShipperID
WHERE o.OrderDate <= '1997-01-08';
```  
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```SQL
SELECT p.ProductName, od.Quantity from [OrderDetails] AS od
JOIN [Products] AS p ON od.ProductID = p.ProductID
WHERE od.OrderID = 10251
ORDER BY p.ProductName;
```
### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
```SQL
SELECT o.OrderID, c.CustomerName, e.LastName FROM [Orders] AS o
JOIN [Customers] AS c ON o.CustomerID = c.CustomerID
JOIN [Employees] AS e ON o.EmployeeID = e.EmployeeID;
```
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
```SQL
SELECT c.CategoryName, COUNT(p.CategoryID) as Count 
FROM [Categories] AS c
JOIN [Products] AS p ON c.categoryID = p.categoryID
GROUP BY c.CategoryName;
```
### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 