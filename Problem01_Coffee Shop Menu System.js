// 1. Create menu collection and insert one menu item
db.menu.insertOne({
  item_id: "ITEM001",
  name: "Espresso",
  category: "Coffee",
  price: 120,
  availability: true
});

// 2. Insert at least 5 menu items using insertMany()
db.menu.insertMany([
  { item_id: "ITEM002", name: "Cappuccino", category: "Coffee", price: 150, availability: true },
  { item_id: "ITEM003", name: "Green Tea", category: "Tea", price: 80, availability: true },
  { item_id: "ITEM004", name: "Croissant", category: "Snack", price: 90, availability: false },
  { item_id: "ITEM005", name: "Latte", category: "Coffee", price: 140, availability: true },
  { item_id: "ITEM006", name: "Masala Chai", category: "Tea", price: 60, availability: true }
]);

// 3. Retrieve all items with availability true
db.menu.find({ availability: true });

// 4. Display only name and price using projection
db.menu.find({}, { name: 1, price: 1, _id: 0 });

// 5. Delete a menu item based on item_id
db.menu.deleteOne({ item_id: "ITEM004" });
