// 1. Insert 5 poll documents using insertMany()
db.polls.insertMany([
  { poll_id: "POLL001", question: "Favorite programming language?", options: ["Python", "JavaScript", "Java", "C++"], votes: [45, 30, 15, 10], created_date: new Date("2026-04-01"), end_date: new Date("2026-05-01"), is_active: true },
  { poll_id: "POLL002", question: "Best coffee type?", options: ["Espresso", "Latte", "Cappuccino"], votes: [25, 40, 35], created_date: new Date("2026-04-15"), end_date: new Date("2026-04-25"), is_active: false },
  { poll_id: "POLL003", question: "Preferred work mode?", options: ["Remote", "Office", "Hybrid"], votes: [50, 20, 30], created_date: new Date("2026-04-20"), end_date: new Date("2026-05-20"), is_active: true },
  { poll_id: "POLL004", question: "Favorite season?", options: ["Summer", "Winter", "Monsoon", "Spring"], votes: [20, 30, 25, 25], created_date: new Date("2022-06-01"), end_date: new Date("2022-07-01"), is_active: false },
  { poll_id: "POLL005", question: "Best database?", options: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"], votes: [40, 25, 20, 10, 5], created_date: new Date("2026-04-25"), end_date: new Date("2026-06-01"), is_active: true }
]);

// 2. Find all polls where is_active is true AND end_date after today
db.polls.find({
  is_active: true,
  end_date: { $gt: new Date() }
});

// 3. Update is_active to false for all polls where end_date is before today
db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);

// 4. Delete all polls where created_date before "2023-01-01" AND is_active is false
db.polls.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_active: false
});

// 5. Find all polls where options array length is greater than 3 using $size
db.polls.find({
  $expr: { $gt: [{ $size: "$options" }, 3] }
});
