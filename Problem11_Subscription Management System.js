// 1. Insert 5 subscription documents using insertMany()
db.subscriptions.insertMany([
  { sub_id: "SUB001", user_name: "Anil Kumar", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2025-01-01"), renewal_date: new Date("2026-01-01"), is_active: true },
  { sub_id: "SUB002", user_name: "Priya Sharma", plan_type: "Premium", monthly_fee: 799, start_date: new Date("2025-06-15"), renewal_date: new Date("2026-06-15"), is_active: true },
  { sub_id: "SUB003", user_name: "Rahul Verma", plan_type: "Standard", monthly_fee: 499, start_date: new Date("2024-03-01"), renewal_date: new Date("2024-09-01"), is_active: false },
  { sub_id: "SUB004", user_name: "Sneha Patel", plan_type: "Premium", monthly_fee: 799, start_date: new Date("2025-09-01"), renewal_date: new Date("2026-09-01"), is_active: true },
  { sub_id: "SUB005", user_name: "Vikram Singh", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2024-01-01"), renewal_date: new Date("2024-07-01"), is_active: false }
]);

// 2. Find all subscriptions with is_active true AND plan_type "Premium"
db.subscriptions.find({ is_active: true, plan_type: "Premium" });

// 3. Update monthly_fee by increasing ₹100 for all Basic plan subscriptions
db.subscriptions.updateMany(
  { plan_type: "Basic" },
  { $inc: { monthly_fee: 100 } }
);

// 4. Delete all subscriptions where is_active is false AND renewal_date before "2025-01-01"
db.subscriptions.deleteMany({
  is_active: false,
  renewal_date: { $lt: new Date("2025-01-01") }
});

// 5. Find all subscriptions sorted by monthly_fee descending, display user_name, plan_type, monthly_fee
db.subscriptions.find(
  {},
  { user_name: 1, plan_type: 1, monthly_fee: 1, _id: 0 }
).sort({ monthly_fee: -1 });
