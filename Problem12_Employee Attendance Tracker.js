// 1. Insert 5 attendance records using insertMany()
db.attendance.insertMany([
  { record_id: "ATT001", emp_name: "Rajesh Kumar", department: "IT", date: new Date("2026-04-28"), status: "Present", check_in_time: "09:00" },
  { record_id: "ATT002", emp_name: "Priya Nair", department: "HR", date: new Date("2026-04-28"), status: "Absent", check_in_time: null },
  { record_id: "ATT003", emp_name: "Amit Sharma", department: "IT", date: new Date("2026-04-28"), status: "Absent", check_in_time: null },
  { record_id: "ATT004", emp_name: "Sneha Reddy", department: "Finance", date: new Date("2026-04-28"), status: "Present", check_in_time: "09:15" },
  { record_id: "ATT005", emp_name: "Vikram Patel", department: "IT", date: new Date("2023-12-15"), status: "Leave", check_in_time: null }
]);

// 2. Find all records where status is "Absent" AND department is "IT"
db.attendance.find({ status: "Absent", department: "IT" });

// 3. Update status to "Present" for all records where check_in_time is not null
db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);

// 4. Delete all records where date before "2024-01-01" AND status is "Leave"
db.attendance.deleteMany({
  date: { $lt: new Date("2024-01-01") },
  status: "Leave"
});

// 5. Find all records with status "Present" sorted by date ascending
db.attendance.find({ status: "Present" }).sort({ date: 1 });
