// 1. Create watchlist collection and insert one movie
db.watchlist.insertOne({
  movie_id: "MOV001",
  title: "Inception",
  genre: "Sci-Fi",
  release_year: 2010,
  imdb_rating: 8.8,
  watched: true
});

// 2. Insert at least 5 movie records using insertMany()
db.watchlist.insertMany([
  { movie_id: "MOV002", title: "The Dark Knight", genre: "Action", release_year: 2008, imdb_rating: 9.0, watched: true },
  { movie_id: "MOV003", title: "Interstellar", genre: "Sci-Fi", release_year: 2014, imdb_rating: 8.6, watched: false },
  { movie_id: "MOV004", title: "Parasite", genre: "Thriller", release_year: 2019, imdb_rating: 8.5, watched: false },
  { movie_id: "MOV005", title: "The Godfather", genre: "Drama", release_year: 1972, imdb_rating: 9.2, watched: false },
  { movie_id: "MOV006", title: "Avengers: Endgame", genre: "Action", release_year: 2019, imdb_rating: 8.4, watched: true }
]);

// 3. Retrieve all movies where watched is false
db.watchlist.find({ watched: false });

// 4. Display only title, genre, and imdb_rating using projection
db.watchlist.find({}, { title: 1, genre: 1, imdb_rating: 1, _id: 0 });

// 5. Delete a movie based on movie_id
db.watchlist.deleteOne({ movie_id: "MOV004" });
