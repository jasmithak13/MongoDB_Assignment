// 1. Create contacts collection and insert one contact
db.contacts.insertOne({
  contact_id: "CON001",
  first_name: "Rahul",
  last_name: "Sharma",
  phone: "9876543210",
  email: "rahul.sharma@email.com",
  city: "Mumbai"
});

// 2. Insert at least 5 contact records using insertMany()
db.contacts.insertMany([
  { contact_id: "CON002", first_name: "Priya", last_name: "Patel", phone: "9876543211", email: "priya.patel@email.com", city: "Delhi" },
  { contact_id: "CON003", first_name: "Amit", last_name: "Kumar", phone: "9876543212", email: "amit.kumar@email.com", city: "Mumbai" },
  { contact_id: "CON004", first_name: "Sneha", last_name: "Reddy", phone: "9876543213", email: "sneha.reddy@email.com", city: "Bangalore" },
  { contact_id: "CON005", first_name: "Vikram", last_name: "Singh", phone: "9876543214", email: "vikram.singh@email.com", city: "Mumbai" },
  { contact_id: "CON006", first_name: "Anjali", last_name: "Gupta", phone: "9876543215", email: "anjali.gupta@email.com", city: "Chennai" }
]);

// 3. Retrieve all contacts from "Mumbai" city
db.contacts.find({ city: "Mumbai" });

// 4. Display only first_name, last_name, and phone using projection
db.contacts.find({}, { first_name: 1, last_name: 1, phone: 1, _id: 0 });

// 5. Delete a contact based on contact_id
db.contacts.deleteOne({ contact_id: "CON003" });
