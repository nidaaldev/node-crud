const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.sqlite", err => {
  if (err) console.error("Database Connection error: ", err.message);

  console.log("Database Connection Established Successfully");

  db.run(`
    
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        password TEXT NOT NULL
    )

        `, err => {
            if (err) {
                console.error("Error when attempt to create 'users' table", err.message);
            } 
        });
});

module.exports = db;