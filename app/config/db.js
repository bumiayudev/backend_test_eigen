const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}).promise();


connection.connect( err => {
    if(err){
        console.log("Error connecting to database", err);
        return;
    }

    console.log("Connected database");
})

module.exports = connection;