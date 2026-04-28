// 1. Create giftcards collection and insert one gift card
db.giftcards.insertOne({
  card_id: "GC001",
  recipient_name: "Anita Desai",
  sender_name: "Rajesh Desai",
  amount: 5000,
  purchase_date: new Date("2026-03-01"),
  expiry_date: new Date("2027-03-01"),
  is_used: false
});

// 2. Insert at least 5 gift card records using insertMany()
db.giftcards.insertMany([
  { card_id: "GC002", recipient_name: "Suresh Mehta", sender_name: "Priya Mehta", amount: 2000, purchase_date: new Date("2026-02-15"), expiry_date: new Date("2027-02-15"), is_used: true },
  { card_id: "GC003", recipient_name: "Neha Singh", sender_name: "Amit Singh", amount: 3000, purchase_date: new Date("2026-04-01"), expiry_date: new Date("2027-04-01"), is_used: false },
  { card_id: "GC004", recipient_name: "Kiran Rao", sender_name: "Deepa Rao", amount: 1500, purchase_date: new Date("2025-12-01"), expiry_date: new Date("2026-03-01"), is_used: false },
  { card_id: "GC005", recipient_name: "Vijay Kumar", sender_name: "Sunita Kumar", amount: 4000, purchase_date: new Date("2026-04-20"), expiry_date: new Date("2027-04-20"), is_used: false },
  { card_id: "GC006", recipient_name: "Lakshmi Iyer", sender_name: "Mohan Iyer", amount: 2500, purchase_date: new Date("2026-01-10"), expiry_date: new Date("2027-01-10"), is_used: true }
]);

// 3. Retrieve all cards where is_used is false AND expiry_date is after today
db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
});

// 4. Display only recipient_name, amount, and expiry_date using projection
db.giftcards.find({}, { recipient_name: 1, amount: 1, expiry_date: 1, _id: 0 });

// 5. Delete a gift card based on card_id
db.giftcards.deleteOne({ card_id: "GC004" });
