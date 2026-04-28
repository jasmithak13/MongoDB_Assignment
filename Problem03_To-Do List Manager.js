// 1. Create tasks collection and insert one task
db.tasks.insertOne({
  task_id: "TASK001",
  title: "Complete MongoDB assignment",
  description: "Finish all 30 problems",
  due_date: new Date("2026-05-01"),
  priority: "High",
  is_completed: false
});

// 2. Insert at least 5 task records using insertMany()
db.tasks.insertMany([
  { task_id: "TASK002", title: "Buy groceries", description: "Milk, bread, eggs", due_date: new Date("2026-04-29"), priority: "Medium", is_completed: false },
  { task_id: "TASK003", title: "Call doctor", description: "Schedule appointment", due_date: new Date("2026-04-30"), priority: "High", is_completed: true },
  { task_id: "TASK004", title: "Read book", description: "Finish chapter 5", due_date: new Date("2026-05-05"), priority: "Low", is_completed: false },
  { task_id: "TASK005", title: "Pay bills", description: "Electricity and internet", due_date: new Date("2026-04-28"), priority: "High", is_completed: false },
  { task_id: "TASK006", title: "Clean room", description: "Weekly cleaning", due_date: new Date("2026-05-02"), priority: "Low", is_completed: true }
]);

// 3. Retrieve all tasks where is_completed is false
db.tasks.find({ is_completed: false });

// 4. Display only title and due_date using projection
db.tasks.find({}, { title: 1, due_date: 1, _id: 0 });

// 5. Delete a task based on task_id
db.tasks.deleteOne({ task_id: "TASK003" });
