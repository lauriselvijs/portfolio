---
title: "E-store"
date: "October 19, 2021"
info: "CRUD operations API with products and categories, using PHP"
tools: "Php"
git_hub: "https://github.com/lauriselvijs/e-store"
main_page: "https://cartelist-abettor.000webhostapp.com/e-store/api/products/read.php"
---

# E-STORE

CRUD operations API with products and categories, using PHP

## Category

**GET** _/e-store/api/categories/read.php_

> Output information about category name, id and created at date.

**GET** _/e-store/api/categories/read_single.php?id=_

> Output information about category name, id and created at date of single record.

**POST** _/e-store/api/categories/create.php_

> Add new category to the database.

**Input**

- Name name:string

**POST** _/e-store/api/categories/update.php_

> Update category.

**Input**

- Category ID id:int
- Name name:string

**POST** _/e-store/api/categories/delete.php_

> Delete category.

**Input**

- Category ID id:int

## Product

**GET** _/e-store/api/products/read.php_

> Output information about product id, name, price, quantity, category id,
> category name, created at.

**GET** _/e-store/api/products/read_single.php?id=_

> Output information about one product id, name, price, quantity, category id,
> category name, created at.

**POST** _/e-store/api/products/create.php_

> Add new product to the database.

**Input**

- Name name:string
- Price price:decimal(19,4)
- Quantity quantity:int
- Category ID category_id:int

**POST** _/e-store/api/products/update.php_

> Update product.

**Input**

- Product ID id:int
- Name name:string
- Price price:decimal(19,4)
- Quantity quantity:int
- Category ID category_id:int

**POST** _/e-store/api/products/delete.php_

> Delete product.

**Input**

- Product ID id:int
