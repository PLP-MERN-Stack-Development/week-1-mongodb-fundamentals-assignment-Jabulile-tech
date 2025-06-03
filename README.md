# 📘 PLP Bookstore – MongoDB Assignment

This project demonstrates the use of MongoDB for managing a fictional bookstore database. It covers MongoDB fundamentals such as CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## 📂 Files Included

- `insert_books.js` – Script to insert book data into the `books` collection.
- `queries.js` – Contains all MongoDB queries (CRUD, advanced queries, aggregations, and indexing).
- `README.md` – Instructions on how to run the scripts.

---

## 🛠 Prerequisites

- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account.
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell) or [MongoDB Compass](https://www.mongodb.com/try/download/compass).

---

## 🚀 How to Run the Scripts

### 🔹 Option 1: Using `mongosh` (MongoDB Shell)

1. Open a terminal window.
2. Navigate to the folder where your scripts are saved.
3. Start the MongoDB shell and connect to your database:
   ```bash
   mongosh

4. Use the target database:
js

Copy
Edit
use plp_bookstore

5. Run the data insertion script:
bash

Copy
Edit
mongosh < insert_books.js
6. To execute the queries:

bash
Copy
Edit
mongosh < queries.js

7. If you're using MongoDB Atlas, use the provided connection string:

bash
Copy
Edit
mongosh "mongodb+srv://<username>:<password>@<cluster-url>/plp_bookstore"


🔹 Option 2: Using MongoDB Compass
1. Connect to your MongoDB server or Atlas cluster using Compass.
2. Create a database named plp_bookstore and a collection named books.
3. Open the insert_books.js file, copy a book document, and paste it into the “Insert Document” window in Compass.
4. Use the “Playground” feature to run multiple queries from queries.js.

