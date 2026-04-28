// 1. Create workouts collection and insert one workout
db.workouts.insertOne({
  workout_id: "WRK001",
  exercise_name: "Running",
  duration_minutes: 30,
  calories_burned: 300,
  date: new Date("2026-04-28"),
  intensity: "High"
});

// 2. Insert at least 5 workout records using insertMany()
db.workouts.insertMany([
  { workout_id: "WRK002", exercise_name: "Yoga", duration_minutes: 45, calories_burned: 150, date: new Date("2026-04-27"), intensity: "Low" },
  { workout_id: "WRK003", exercise_name: "Weight Training", duration_minutes: 60, calories_burned: 400, date: new Date("2026-04-26"), intensity: "High" },
  { workout_id: "WRK004", exercise_name: "Cycling", duration_minutes: 40, calories_burned: 350, date: new Date("2026-04-25"), intensity: "Medium" },
  { workout_id: "WRK005", exercise_name: "Swimming", duration_minutes: 50, calories_burned: 450, date: new Date("2026-04-24"), intensity: "High" },
  { workout_id: "WRK006", exercise_name: "Walking", duration_minutes: 60, calories_burned: 200, date: new Date("2026-04-23"), intensity: "Low" }
]);

// 3. Retrieve all workouts with intensity "High"
db.workouts.find({ intensity: "High" });

// 4. Display only exercise_name, duration_minutes, and calories_burned using projection
db.workouts.find({}, { exercise_name: 1, duration_minutes: 1, calories_burned: 1, _id: 0 });

// 5. Delete a workout based on workout_id
db.workouts.deleteOne({ workout_id: "WRK002" });
