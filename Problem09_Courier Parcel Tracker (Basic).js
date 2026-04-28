// 1. Create parcels collection and insert one parcel
db.parcels.insertOne({
  parcel_id: "PAR001",
  sender_name: "Rahul Verma",
  receiver_name: "Pooja Verma",
  weight: 2.5,
  shipping_cost: 250,
  booking_date: new Date("2026-04-25"),
  delivery_status: "Pending"
});

// 2. Insert at least 5 parcel records using insertMany()
db.parcels.insertMany([
  { parcel_id: "PAR002", sender_name: "Amit Shah", receiver_name: "Neha Shah", weight: 1.0, shipping_cost: 150, booking_date: new Date("2026-04-24"), delivery_status: "Shipped" },
  { parcel_id: "PAR003", sender_name: "Sunita Reddy", receiver_name: "Kiran Reddy", weight: 5.0, shipping_cost: 450, booking_date: new Date("2026-04-23"), delivery_status: "Delivered" },
  { parcel_id: "PAR004", sender_name: "Vikram Patel", receiver_name: "Anjali Patel", weight: 3.2, shipping_cost: 300, booking_date: new Date("2026-04-26"), delivery_status: "Pending" },
  { parcel_id: "PAR005", sender_name: "Meera Nair", receiver_name: "Arjun Nair", weight: 0.8, shipping_cost: 100, booking_date: new Date("2026-04-27"), delivery_status: "Pending" },
  { parcel_id: "PAR006", sender_name: "Deepak Gupta", receiver_name: "Ritu Gupta", weight: 4.5, shipping_cost: 400, booking_date: new Date("2026-04-22"), delivery_status: "Shipped" }
]);

// 3. Retrieve all parcels with delivery_status "Pending"
db.parcels.find({ delivery_status: "Pending" });

// 4. Display only sender_name, receiver_name, and shipping_cost using projection
db.parcels.find({}, { sender_name: 1, receiver_name: 1, shipping_cost: 1, _id: 0 });

// 5. Delete a parcel based on parcel_id
db.parcels.deleteOne({ parcel_id: "PAR003" });
