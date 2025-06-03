// Task 2: Basic CRUD Operations

// 1. Find all books in a specific genre
db.books.find({ genre: "Technology" });

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2018 } });

// 3. Find books by a specific author
db.books.find({ author: "Harper Lee" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 14.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "The Hobbit" });


// Task 3: Advanced Queries

// 1. Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Projection: return only title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// 3. Sort books by price ascending
db.books.find().sort({ price: 1 });

// 4. Sort books by price descending
db.books.find().sort({ price: -1 });

// 5. Pagination - Page 1 (first 5 books)
db.books.find().limit(5);

// 6. Pagination - Page 2 (next 5 books)
db.books.find().skip(5).limit(5);


// Task 4: Aggregation Pipeline

// 1. Calculate average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// 2. Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: { $concat: [
        { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
        "s"
      ] },
      count: { $sum: 1 }
    }
  }
]);


// Task 5: Indexing

// 1. Create an index on the title field
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Use explain() to demonstrate performance improvement
db.books.find({ title: "The Silent Forest" }).explain("executionStats");
