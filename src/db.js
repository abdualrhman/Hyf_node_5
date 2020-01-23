const mysql = require("mysql");
require("dotenv").config();

const createConnection=()=>{
    const {CLEARDB_DATABASE_URL} =process.env;
    return mysql.createPool(CLEARDB_DATABASE_URL);
}

module.exports = createConnection();