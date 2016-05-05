﻿Q.ScriptData.set('Columns.Northwind.Customer', [{"name":"CustomerID","title":"Db.Shared.RecordId","editorParams":{"maxLength":5},"maxLength":5,"required":true,"updatable":false,"width":100,"editLink":true},{"name":"CompanyName","title":"Db.Northwind.Customer.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true},{"name":"ContactName","title":"Db.Northwind.Customer.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Customer.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"City","title":"Db.Northwind.Customer.City","editorParams":{"maxLength":15},"maxLength":15,"width":120},{"name":"Region","title":"Db.Northwind.Customer.Region","editorParams":{"maxLength":15},"maxLength":15,"width":60},{"name":"PostalCode","title":"Db.Northwind.Customer.PostalCode","editorParams":{"maxLength":10},"maxLength":10,"width":100},{"name":"Country","title":"Db.Northwind.Customer.Country","editorParams":{"maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCountry"}},{"name":"Phone","title":"Db.Northwind.Customer.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120},{"name":"Fax","title":"Db.Northwind.Customer.Fax","editorParams":{"maxLength":24},"maxLength":24,"width":120}]);



Q.ScriptData.set('Columns.Northwind.Order', [{"name":"OrderID","title":"Db.Northwind.Order.OrderID","required":true,"insertable":false,"updatable":false,"alignment":"right","width":70,"sortOrder":-1,"editLink":true},{"name":"CustomerCompanyName","title":"Db.Northwind.Order.CustomerCompanyName","width":200,"editLink":true,"filteringType":"Editor","filteringParams":{"idField":"CustomerID","editorType":"Serene.Northwind.CustomerEditor","useLike":true},"filteringIdField":"CustomerID"},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","required":true,"formatterType":"Date","width":85,"editLink":true,"filteringType":"Date"},{"name":"EmployeeFullName","title":"Db.Northwind.Order.EmployeeFullName","formatterType":"Serene.Northwind.EmployeeFormatter","formatterParams":{"genderProperty":"EmployeeGender"},"width":140},{"name":"RequiredDate","title":"Db.Northwind.Order.RequiredDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ShippedDate","title":"Db.Northwind.Order.ShippedDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date"},{"name":"ShipViaCompanyName","title":"Db.Northwind.Order.ShipViaCompanyName","formatterType":"Serene.Northwind.ShipperFormatter","width":140,"filteringType":"Lookup","filteringParams":{"idField":"ShipVia","lookupKey":"Northwind.Shipper"},"filteringIdField":"ShipVia"},{"name":"ShipCountry","title":"Db.Northwind.Order.ShipCountry","editorParams":{"maxLength":15},"maxLength":15,"width":100},{"name":"ShipCity","title":"Db.Northwind.Order.ShipCity","editorParams":{"maxLength":15},"maxLength":15,"width":100},{"name":"Freight","title":"Db.Northwind.Order.Freight","editorType":"Decimal","formatterType":"Serene.Northwind.FreightFormatter","formatterParams":{"displayFormat":"#,##0.####"},"displayFormat":"#,##0.####","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.####"}}]);



Q.ScriptData.set('Columns.Northwind.Product', [{"name":"ProductID","title":"Db.Shared.RecordId","required":true,"insertable":false,"updatable":false,"localizable":true,"alignment":"right","width":65,"editLink":true},{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"localizable":true,"width":250,"editLink":true},{"name":"Discontinued","title":"Db.Northwind.Product.Discontinued","editorType":"Boolean","required":true,"formatterType":"Checkbox","width":40,"filteringType":"Boolean"},{"name":"SupplierCompanyName","title":"Db.Northwind.Product.SupplierCompanyName","width":250,"editLink":true,"editLinkItemType":"Northwind.Supplier","editLinkIdField":"SupplierID","filteringType":"Lookup","filteringParams":{"idField":"SupplierID","lookupKey":"Northwind.Supplier"},"filteringIdField":"SupplierID"},{"name":"CategoryName","title":"Db.Northwind.Product.CategoryName","width":150,"editLink":true,"editLinkItemType":"Northwind.Category","editLinkIdField":"CategoryID","filteringType":"Lookup","filteringParams":{"idField":"CategoryID","lookupKey":"Northwind.Category"},"filteringIdField":"CategoryID"},{"name":"QuantityPerUnit","title":"Db.Northwind.Product.QuantityPerUnit","editorParams":{"maxLength":20},"maxLength":20,"width":130},{"name":"UnitPrice","title":"Db.Northwind.Product.UnitPrice","editorType":"Decimal","formatterType":"Number","alignment":"right","width":80,"filteringType":"Decimal"},{"name":"UnitsInStock","title":"Db.Northwind.Product.UnitsInStock","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"},{"name":"UnitsOnOrder","title":"Db.Northwind.Product.UnitsOnOrder","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"},{"name":"ReorderLevel","title":"Db.Northwind.Product.ReorderLevel","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer"}]);



Q.ScriptData.set('Columns.Northwind.SalesByCategory', [{"name":"CategoryName","title":"Db.Northwind.SalesByCategory.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"width":150,"sortOrder":1},{"name":"ProductName","title":"Db.Northwind.SalesByCategory.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250},{"name":"ProductSales","title":"Db.Northwind.SalesByCategory.ProductSales","editorType":"Decimal","editorParams":{"minValue":"000000000000000.0000","maxValue":"999999999999999.9999"},"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":150,"sortOrder":-2,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Columns.Northwind.Category', [{"name":"CategoryID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"localizable":true,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CategoryName","title":"Db.Northwind.Category.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"localizable":true,"width":250,"editLink":true},{"name":"Description","title":"Db.Northwind.Category.Description","localizable":true,"width":450}]);



Q.ScriptData.set('Columns.Northwind.OrderDetail', [{"name":"ProductName","title":"Db.Northwind.OrderDetail.ProductName","width":200,"editLink":true,"filteringType":"Lookup","filteringParams":{"idField":"ProductID","lookupKey":"Northwind.Product"},"filteringIdField":"ProductID"},{"name":"UnitPrice","title":"Db.Northwind.OrderDetail.UnitPrice","editorType":"Decimal","required":true,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"Quantity","title":"Db.Northwind.OrderDetail.Quantity","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":1,"alignment":"right","width":100,"filteringType":"Integer"},{"name":"Discount","title":"Db.Northwind.OrderDetail.Discount","editorType":"Decimal","required":true,"defaultValue":0,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}},{"name":"LineTotal","title":"Db.Northwind.OrderDetail.LineTotal","editorType":"Decimal","formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"}}]);



Q.ScriptData.set('Columns.Northwind.Region', [{"name":"RegionID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"RegionDescription","title":"Db.Northwind.Region.RegionDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":300,"editLink":true}]);



Q.ScriptData.set('Columns.Northwind.Shipper', [{"name":"ShipperID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CompanyName","title":"Db.Northwind.Shipper.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":300,"editLink":true},{"name":"Phone","title":"Db.Northwind.Shipper.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":150}]);



Q.ScriptData.set('Columns.Northwind.Supplier', [{"name":"SupplierID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"CompanyName","title":"Db.Northwind.Supplier.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true},{"name":"ContactName","title":"Db.Northwind.Supplier.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"ContactTitle","title":"Db.Northwind.Supplier.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150},{"name":"Phone","title":"Db.Northwind.Supplier.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120},{"name":"City","title":"Db.Northwind.Supplier.City","editorParams":{"maxLength":15},"maxLength":15,"width":130},{"name":"Region","title":"Db.Northwind.Supplier.Region","editorParams":{"maxLength":15},"maxLength":15,"width":80},{"name":"Country","title":"Db.Northwind.Supplier.Country","editorParams":{"maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.SupplierCountry"}}]);



Q.ScriptData.set('Columns.Northwind.Territory', [{"name":"TerritoryID","title":"Db.Shared.RecordId","editorType":"Integer","editorParams":{"maxLength":20},"maxLength":20,"required":true,"updatable":false,"formatterType":"Number","width":100,"editLink":true,"filteringType":"Integer"},{"name":"TerritoryDescription","title":"Db.Northwind.Territory.TerritoryDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":200,"editLink":true},{"name":"RegionDescription","title":"Db.Northwind.Territory.RegionDescription","width":150,"editLink":true,"editLinkItemType":"Northwind.Region","editLinkIdField":"RegionID","filteringParams":{"idField":"RegionID"},"filteringIdField":"RegionID"}]);



Q.ScriptData.set('Columns.Administration.User', [{"name":"UserId","title":"Db.Administration.User.UserId","required":true,"insertable":false,"updatable":false,"alignment":"right","width":55,"editLink":true},{"name":"Username","title":"Db.Administration.User.Username","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"editLink":true},{"name":"DisplayName","title":"Db.Administration.User.DisplayName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150},{"name":"Email","title":"Db.Administration.User.Email","editorParams":{"maxLength":100},"maxLength":100,"width":250},{"name":"Source","title":"Db.Administration.User.Source","editorParams":{"maxLength":4},"maxLength":4,"required":true,"insertable":false,"updatable":false,"defaultValue":"site","width":100}]);



Q.ScriptData.set('Columns.Administration.Language', [{"name":"LanguageId","title":"Db.Administration.Language.LanguageId","editorParams":{"maxLength":10},"maxLength":10,"required":true,"width":150,"editLink":true},{"name":"LanguageName","title":"Db.Administration.Language.LanguageName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true}]);



Q.ScriptData.set('Columns.Administration.Role', [{"name":"RoleId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer"},{"name":"RoleName","title":"Db.Administration.Role.RoleName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true}]);



