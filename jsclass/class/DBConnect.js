const mysql = require('mysql');
const configs = require('../configs.json');

const DBConnect = class DBConnect {
    constructor() {
        this.connection = mysql.createConnection(configs);
        this.connection.connect();
    }
}

module.exports = DBConnect;