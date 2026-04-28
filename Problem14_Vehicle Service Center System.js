// 1. Insert 5 service records using insertMany()
db.services.insertMany([
  { service_id: "SRV001", customer_name: "Anil Mehta", vehicle_number: "MH12AB1234", service_type: "Oil Change", service_date: new Date("2026-04-28"), cost: 1500, status: "Scheduled" },
  { service_id: "SRV002", customer_name: "Priya Shah", vehicle_number: "MH14CD5678", service_type: "Repair", service_date: new Date("2026-07-15"), cost: 5000, status: "InProgress" },
  { service_id: "SRV003", customer_name: "Rahul Gupta", vehicle_number: "MH20EF9012", service_type: "Inspection", service_date: new Date("2024-12-01"), cost: 300, status: "Completed" },
  { service_id: "SRV004", customer_name: "Sneha Verma", vehicle_number: "MH01GH3456", service_type: "Oil Change", service_date: new Date("2026-08-10"), cost: 1200, status: "InProgress" },
  { service_id: "SRV005", customer_name: "Vikram Rao", vehicle_number: "MH04IJ7890", service_type: "Repair", service_date: new Date("2024-11-20"), cost: 8000, status: "Completed" }
]);

// 2. Find all records with status "InProgress" AND service_date before "2026-08-01"
db.services.find({
  status: "InProgress",
  service_date: { $lt: new Date("2026-08-01") }
});

// 3. Update status to "Completed" for all records where service_date before "2025-01-01"
db.services.updateMany(
  { service_date: { $lt: new Date("2025-01-01") } },
  { $set: { status: "Completed" } }
);

// 4. Delete all records with status "Completed" AND cost less than ₹500
db.services.deleteMany({
  status: "Completed",
  cost: { $lt: 500 }
});

// 5. Find all records sorted by cost descending, display customer_name, service_type, cost
db.services.find(
  {},
  { customer_name: 1, service_type: 1, cost: 1, _id: 0 }
).sort({ cost: -1 });
