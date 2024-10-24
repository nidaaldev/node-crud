const db = require('../config/db');

class User {
    constructor(username, name, surname, password) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }

    async createUser() {

        const query = `INSERT INTO users(username, name, surname, password) VALUES (?, ?, ?, ?)`; 

        db.run(query, [this.surname, this.name, this.surname, this.password], err => {
            if (err) throw new Error('Error when try to INSERT User.')

            console.log(`User with username "${this.username} INSERTED."`);

        });
    }

    static async getUsers() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM users', (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    }
}

module.exports = User;