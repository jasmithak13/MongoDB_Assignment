// 1. Create hostel collection and insert one student
db.hostel.insertOne({
  student_id: "STU001",
  name: "Ravi Kumar",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2026-01-15")
});

// 2. Insert at least 5 student records using insertMany()
db.hostel.insertMany([
  { student_id: "STU002", name: "Meera Joshi", room_number: 102, block_name: "A", bed_number: 2, check_in_date: new Date("2026-01-16") },
  { student_id: "STU003", name: "Arjun Nair", room_number: 201, block_name: "B", bed_number: 1, check_in_date: new Date("2026-01-17") },
  { student_id: "STU004", name: "Kavya Menon", room_number: 103, block_name: "A", bed_number: 1, check_in_date: new Date("2026-01-18") },
  { student_id: "STU005", name: "Sanjay Rao", room_number: 202, block_name: "B", bed_number: 2, check_in_date: new Date("2026-01-19") },
  { student_id: "STU006", name: "Divya Sharma", room_number: 104, block_name: "C", bed_number: 1, check_in_date: new Date("2026-01-20") }
]);

// 3. Retrieve all students from block "A"
db.hostel.find({ block_name: "A" });

// 4. Display only name, room_number, and block_name using projection
db.hostel.find({}, { name: 1, room_number: 1, block_name: 1, _id: 0 });

// 5. Delete a student record based on student_id
db.hostel.deleteOne({ student_id: "STU003" });
