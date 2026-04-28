// 1. Insert 5 reading records using insertMany()
db.reading.insertMany([
  { record_id: "READ001", member_name: "Anita Sharma", book_title: "The Alchemist", genre: "Fiction", pages_read: 200, total_pages: 200, start_date: new Date("2026-01-01"), completion_date: new Date("2026-01-15"), is_completed: true },
  { record_id: "READ002", member_name: "Raj Kumar", book_title: "Sapiens", genre: "Non-Fiction", pages_read: 150, total_pages: 450, start_date: new Date("2026-02-01"), completion_date: null, is_completed: false },
  { record_id: "READ003", member_name: "Priya Nair", book_title: "1984", genre: "Fiction", pages_read: 328, total_pages: 328, start_date: new Date("2026-03-01"), completion_date: new Date("2026-03-20"), is_completed: true },
  { record_id: "READ004", member_name: "Amit Patel", book_title: "Clean Code", genre: "Technology", pages_read: 50, total_pages: 400, start_date: new Date("2022-06-01"), completion_date: null, is_completed: false },
  { record_id: "READ005", member_name: "Sneha Reddy", book_title: "Pride and Prejudice", genre: "Fiction", pages_read: 279, total_pages: 279, start_date: new Date("2026-04-01"), completion_date: new Date("2026-04-25"), is_completed: true }
]);

// 2. Find all records where is_completed is false AND pages_read greater than 100
db.reading.find({
  is_completed: false,
  pages_read: { $gt: 100 }
});

// 3. Update is_completed to true for all records where completion_date is not null
db.reading.updateMany(
  { completion_date: { $ne: null } },
  { $set: { is_completed: true } }
);

// 4. Delete all records where start_date before "2023-01-01" AND is_completed is false
db.reading.deleteMany({
  start_date: { $lt: new Date("2023-01-01") },
  is_completed: false
});

// 5. Find all records where genre is "Fiction" AND is_completed is true
db.reading.find({
  genre: "Fiction",
  is_completed: true
});
