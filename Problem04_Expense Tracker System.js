// 1. Create expenses collection and insert one expense
db.expenses.insertOne({
  expense_id: "EXP001",
  category: "Food",
  amount: 350,
  date: new Date("2026-04-25"),
  payment_method: "UPI",
  note: "Lunch at restaurant"
});

// 2. Insert at least 5 expense records using insertMany()
db.expenses.insertMany([
  { expense_id: "EXP002", category: "Transport", amount: 150, date: new Date("2026-04-26"), payment_method: "Cash", note: "Auto fare" },
  { expense_id: "EXP003", category: "Entertainment", amount: 800, date: new Date("2026-04-24"), payment_method: "Card", note: "Movie tickets" },
  { expense_id: "EXP004", category: "Bills", amount: 2500, date: new Date("2026-04-20"), payment_method: "UPI", note: "Electricity bill" },
  { expense_id: "EXP005", category: "Food", amount: 200, date: new Date("2026-04-27"), payment_method: "Cash", note: "Snacks" },
  { expense_id: "EXP006", category: "Transport", amount: 600, date: new Date("2026-04-23"), payment_method: "UPI", note: "Cab ride" }
]);

// 3. Retrieve all expenses with amount greater than ₹500
db.expenses.find({ amount: { $gt: 500 } });

// 4. Display only category, amount, and date using projection
db.expenses.find({}, { category: 1, amount: 1, date: 1, _id: 0 });

// 5. Delete an expense based on expense_id
db.expenses.deleteOne({ expense_id: "EXP002" });
