1. Create an Entity-Relationship Diagram (ERD) showing entities, attributes, and relationships.

You may:
Hand-draw the ERD and take a clear photo.
OR use a digital tool (e.g., Figma, Canva, draw.io) and take a screenshot.

2. Save the image and place it in your “Task2” folder.

3. SQL Schema (reference Northwind Database; same database used in Geek Week)

Write CREATE TABLE statements for at least three entities, including:
Primary keys (PK)
Foreign keys (FK)
Appropriate data types and NOT NULL constraints.

Please add your SQL query below AND add an explanation: 

 TABLE 1: Customers

CREATE TABLE Customers (
    CustomerID   NCHAR(5)        NOT NULL,   -- PK: 5-char code like 'ALFKI'
    CompanyName  NVARCHAR(40)    NOT NULL,
    ContactName  NVARCHAR(30)    NULL,
    ContactTitle NVARCHAR(30)    NULL,
    Address      NVARCHAR(60)    NULL,
    City         NVARCHAR(15)    NULL,
    Region       NVARCHAR(15)    NULL,
    PostalCode   NVARCHAR(10)    NULL,
    Country      NVARCHAR(15)    NULL,
    Phone        NVARCHAR(24)    NULL,
    Fax          NVARCHAR(24)    NULL,

    CONSTRAINT PK_Customers PRIMARY KEY (CustomerID)
);


 TABLE 2: Orders

CREATE TABLE Orders (
    OrderID        INT             NOT NULL IDENTITY(1,1),  -- PK: auto-increments
    CustomerID     NCHAR(5)        NOT NULL,                -- FK → Customers
    EmployeeID     INT             NULL,                    -- FK → Employees
    OrderDate      DATETIME        NOT NULL,
    RequiredDate   DATETIME        NULL,
    ShippedDate    DATETIME        NULL,
    Freight        MONEY           NULL,
    ShipName       NVARCHAR(40)    NULL,
    ShipAddress    NVARCHAR(60)    NULL,
    ShipCity       NVARCHAR(15)    NULL,
    ShipRegion     NVARCHAR(15)    NULL,
    ShipPostalCode NVARCHAR(10)    NULL,
    ShipCountry    NVARCHAR(15)    NULL,

    CONSTRAINT PK_Orders
        PRIMARY KEY (OrderID),

    CONSTRAINT FK_Orders_Customers
        FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID),

    CONSTRAINT FK_Orders_Employees
        FOREIGN KEY (EmployeeID)
        REFERENCES Employees(EmployeeID)
);


   TABLE 3: Products

 CREATE TABLE Products (
    ProductID       INT             NOT NULL IDENTITY(1,1),  -- PK: auto-increments
    ProductName     NVARCHAR(40)    NOT NULL,
    SupplierID      INT             NULL,                    -- FK → Suppliers
    CategoryID      INT             NULL,                    -- FK → Categories
    QuantityPerUnit NVARCHAR(20)    NULL,
    UnitPrice       MONEY           NULL,
    UnitsInStock    SMALLINT        NULL,
    UnitsOnOrder    SMALLINT        NULL,
    ReorderLevel    SMALLINT        NULL,
    Discontinued    BIT             NOT NULL,

    CONSTRAINT PK_Products
        PRIMARY KEY (ProductID),

    CONSTRAINT FK_Products_Suppliers
        FOREIGN KEY (SupplierID)
        REFERENCES Suppliers(SupplierID),

    CONSTRAINT FK_Products_Categories
        FOREIGN KEY (CategoryID)
        REFERENCES Categories(CategoryID)
);
Explanation
Primary Keys (PK) — Every table has one column (or combination of columns) that uniquely identifies each row.
Foreign Keys (FK) — These are the links between tables. 
NOT NULL vs NULL — NOT NULL means the column is required — the database will throw an error if you try to insert a row without that value.
Data Types — NVARCHAR stores variable-length text and supports international characters (the N stands for Unicode, so it handles names in French, Japanese, etc.). 
MONEY is used for prices because it stores exact decimal values without the rounding errors that FLOAT can cause — critical for financial data. 
SMALLINT is used for stock quantities because it uses less storage than a full INT and inventory counts will never exceed 32,767 units. 
BIT for Discontinued stores just a 0 or 1 (true/false), which is all you need for a yes/no flag.
How the three tables connect — A Customer can place many Orders (one-to-many). Each Order can contain many Products, and each Product can appear in many Orders — that many-to-many relationship is handled by a fourth table called Order Details in your original file, which uses both OrderID and ProductID as a composite primary key.


4. For submission, commit and push.
