const mysql = require('mysql');
const DBConnect = require('./DBConnect');

const DBUser = class DBUser extends DBConnect {
    constructor() {
        super();
    }
    query() {
        return new Promise((resolve, reject) => {
            var query = 'SELECT * FROM users';
            this.connection.query(query, (error, results, fileds) => {
                this.connection.end();
                if (!error) {
                    return resolve(results);
                }
                return reject(error);
            })
        })
    }
}

module.exports = DBUser;