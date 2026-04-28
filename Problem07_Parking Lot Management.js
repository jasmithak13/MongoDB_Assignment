// 1. Create parking collection and insert one parking slot
db.parking.insertOne({
  slot_id: "SLOT001",
  floor: 1,
  vehicle_type: "Car",
  is_occupied: true,
  vehicle_number: "MH12AB1234"
});

// 2. Insert at least 5 parking slot records using insertMany()
db.parking.insertMany([
  { slot_id: "SLOT002", floor: 1, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: "SLOT003", floor: 2, vehicle_type: "Car", is_occupied: true, vehicle_number: "MH14CD5678" },
  { slot_id: "SLOT004", floor: 2, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: "SLOT005", floor: 3, vehicle_type: "Car", is_occupied: false, vehicle_number: null },
  { slot_id: "SLOT006", floor: 3, vehicle_type: "Bike", is_occupied: true, vehicle_number: "MH20EF9012" }
]);

// 3. Retrieve all slots where is_occupied is false
db.parking.find({ is_occupied: false });

// 4. Display only slot_id, floor, and vehicle_type using projection
db.parking.find({}, { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 });

// 5. Delete a parking slot based on slot_id
db.parking.deleteOne({ slot_id: "SLOT004" });
